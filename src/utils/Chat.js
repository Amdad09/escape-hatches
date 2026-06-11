export function createFunction() {
    return {
        connect() {
            console.log('✅ Connecting...');
        },
        disconnect() {
            console.log('❌ Disconnected.');
        }
    }
}