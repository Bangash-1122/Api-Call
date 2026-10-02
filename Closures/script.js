// Closure-based Toast Notification Manager
// Demonstrates closure concept: encapsulates state (toastId, container, configs) and provides a clean API
function createToastManager() {
    let toastId = 0;
    const container = document.getElementById('toast-container');

    const configs = {
        success: {
            badgeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
            borderAccent: 'bg-emerald-500/60',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />',
            defaultTitle: 'Success!',
            defaultMsg: 'Your changes were saved successfully.'
        },
        error: {
            badgeClass: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
            borderAccent: 'bg-rose-500/60',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />',
            defaultTitle: 'Action Failed',
            defaultMsg: 'Something went wrong while processing your request.'
        },
        info: {
            badgeClass: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
            borderAccent: 'bg-indigo-500/60',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
            defaultTitle: 'Information',
            defaultMsg: 'A new update is available for your account.'
        }
    };

    function dismiss(element) {
        if (!element) return;
        element.classList.add('opacity-0', 'translate-x-6');
        setTimeout(() => element.remove(), 300);
    }

    return {
        show(type = 'success', title, message, duration = 4000) {
            toastId++;
            const id = `toast-${toastId}`;
            const cfg = configs[type] || configs.info;

            const toastEl = document.createElement('div');
            toastEl.id = id;
            toastEl.className = 'pointer-events-auto relative overflow-hidden flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/50 transition-all duration-300 transform translate-x-6 opacity-0 group hover:border-slate-700';

            toastEl.innerHTML = `
                <div class="flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${cfg.badgeClass}">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        ${cfg.icon}
                    </svg>
                </div>
                <div class="flex-1 pt-0.5">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-semibold text-slate-100 tracking-wide">${title || cfg.defaultTitle}</h3>
                        <span class="text-xs text-slate-500 font-mono">just now</span>
                    </div>
                    <p class="mt-1 text-xs text-slate-400 leading-relaxed">${message || cfg.defaultMsg}</p>
                </div>
                <button class="close-btn flex-shrink-0 text-slate-400 hover:text-slate-200 hover:bg-slate-800 p-1.5 rounded-lg transition-colors focus:outline-none" aria-label="Close notification">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="absolute bottom-0 left-0 right-0 h-0.5 ${cfg.borderAccent}"></div>
            `;

            container.appendChild(toastEl);

            // Animate entry
            requestAnimationFrame(() => {
                toastEl.classList.remove('translate-x-6', 'opacity-0');
                toastEl.classList.add('translate-x-0', 'opacity-100');
            });

            // Dismiss on button click
            toastEl.querySelector('.close-btn').addEventListener('click', () => dismiss(toastEl));

            // Auto dismiss after specified duration
            if (duration > 0) {
                setTimeout(() => dismiss(toastEl), duration);
            }
        },
        dismiss
    };
}

// Initialize manager closure
const toastManager = createToastManager();

// Global helpers accessible to inline HTML handlers
function triggerToast(type) {
    toastManager.show(type);
}

function dismissToast(id) {
    const el = document.getElementById(id);
    toastManager.dismiss(el);
}
