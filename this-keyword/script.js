const form = document.querySelector('#user-form');
const photo = document.querySelector('#photo');
const preview = document.querySelector('#photo-preview');
const cards = document.querySelector('#user-cards');
const error = document.querySelector('#error');
const submit = document.querySelector('#submit-button');
let selectedPhotoUrl = null;
let selectionVersion = 0;

function showError(message = '') {
    error.textContent = message;
    error.hidden = !message;
}

function updateCount() {
    const count = cards.children.length;
    document.querySelector('#user-count').textContent = `${count} ${count === 1 ? 'user' : 'users'}`;
    document.querySelector('#empty-state').hidden = count > 0;
}

// Reject whitespace-only entries as well as ordinary empty fields.
for (const field of ['name', 'role', 'bio']) {
    const input = form.elements[field];
    input.addEventListener('input', () => {
        input.setCustomValidity(input.value.trim() ? '' : 'Please enter a value.');
    });
}

// Decode the selected photo before allowing submission; no server upload occurs.
photo.addEventListener('change', async () => {
    const version = ++selectionVersion;
    if (selectedPhotoUrl) URL.revokeObjectURL(selectedPhotoUrl);
    selectedPhotoUrl = null;
    preview.hidden = true;
    preview.removeAttribute('src');
    showError();
    photo.setCustomValidity('');
    submit.disabled = false;
    const file = photo.files[0];
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
        photo.setCustomValidity('Choose a JPG, PNG or WebP image under 5 MB.');
        showError(photo.validationMessage);
        return;
    }
    submit.disabled = true;
    const url = URL.createObjectURL(file);
    try {
        const image = new Image();
        image.src = url;
        await image.decode();
        if (version !== selectionVersion) {
            URL.revokeObjectURL(url);
            return;
        }
        selectedPhotoUrl = url;
        preview.src = url;
        preview.hidden = false;
    } catch {
        URL.revokeObjectURL(url);
        if (version === selectionVersion) {
            photo.setCustomValidity('This photo could not be opened. Please choose another image.');
            showError(photo.validationMessage);
        }
    } finally {
        if (version === selectionVersion) submit.disabled = false;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Render the card without reloading the page.
    if (submit.disabled || !form.reportValidity()) return;
    const name = form.elements.name.value.trim();
    const role = form.elements.role.value.trim();
    const bio = form.elements.bio.value.trim();
    if (!name || !role || !bio) {
        showError('Please complete Name, Role and Bio.');
        return;
    }

    const card = document.querySelector('#card-template').content.firstElementChild.cloneNode(true);
    // textContent treats user input as text, never executable HTML.
    card.querySelector('[data-name]').textContent = name;
    card.querySelector('[data-role]').textContent = role;
    card.querySelector('[data-bio]').textContent = bio;
    const avatar = card.querySelector('[data-avatar]');
    const cardPhotoUrl = selectedPhotoUrl;
    if (cardPhotoUrl) {
        const image = document.createElement('img');
        image.src = cardPhotoUrl;
        image.alt = `Profile photo of ${name}`;
        image.className = 'h-full w-full object-cover';
        avatar.append(image);
    } else {
        avatar.textContent = name.split(/\s+/).slice(0, 2).map(part => Array.from(part)[0]).join('').toUpperCase();
        avatar.setAttribute('aria-hidden', 'true');
    }
    const remove = card.querySelector('[data-remove]');
    remove.setAttribute('aria-label', `Remove ${name}`);
    remove.addEventListener('click', () => {
        card.remove();
        if (cardPhotoUrl) URL.revokeObjectURL(cardPhotoUrl);
        updateCount();
        document.querySelector('#status').textContent = `${name} removed.`;
        form.elements.name.focus();
    });
    cards.prepend(card);
    updateCount();
    document.querySelector('#status').textContent = `${name} added successfully.`;
    // The card now owns its photo URL, so resetting the form must not revoke it.
    selectedPhotoUrl = null;
    form.reset();
    preview.hidden = true;
    preview.removeAttribute('src');
    showError();
    form.elements.name.focus();
});
