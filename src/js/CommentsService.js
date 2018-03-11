export class CommentsService {

    constructor(url) {
        this.url = url;
    }

    async take() {
        const response = await fetch(this.url);
        return response.json();
    }

    async post(comment) {
        const response = await fetch(this.url, {
            method: 'post',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

}