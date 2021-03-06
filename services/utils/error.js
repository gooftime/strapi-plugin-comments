module.exports = class PluginError extends Error {
    constructor(status, message, payload = undefined) { 
        super();
        this.name = 'Strapi:Plugin:Comments'; 
        this.status = status || 500;
        this.message = message || 'Internal error'; 
        this.payload = payload;
     }

     toString(e = this) {
        return `${e.name} - ${e.message}`;
     }

     getData() {
         if (this.payload) {
            return JSON.stringify({
                name: this.name,
                message: this.message,
                ...(this.payload || {}),
            });
        }
        return this.toString();
     }
}; 