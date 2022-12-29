export default async function demangler() {
    const r = await import('../pkg/index.js')
    return r.demangle;
};