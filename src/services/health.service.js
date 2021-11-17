class HealthService {
    get() {
        return {
            status: 'ok',
            date: new Date(),
        };
    }
}

module.exports = HealthService;