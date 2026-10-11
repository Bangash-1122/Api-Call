// code splitting in JS : Dynamic import
// hum by default ek hi JS bundle load karte hai, but kabhi kabhi 1 JS file bahut badi hoti hai,
// usko hum on-demand load karenge, yaani jab need hogi tab use karenge
export function veryHeavy() {
    console.log("giant feature loaded successfully!.....");
    alert("heavy feature loading completed...")
};
