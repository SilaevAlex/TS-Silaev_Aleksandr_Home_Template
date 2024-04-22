abstract class Media {
    protected title: string;

    constructor(title: string) {
        this.title = title;
    }

    abstract play(): void;
}

class AudioMedia extends Media {
    constructor(title: string) {
        super(title);
    }

    play(): void {
        console.log(`Play audio: ${this.title}`);
    }
}

class Video extends Media {
    constructor(title: string) {
        super(title);
    }

    play(): void {
        console.log(`Play video: ${this.title}`);
    }
}

class MultimediaPlayerFacade {
    private media: Media[];

    constructor() {
        this.media = [];
    }

    addMedia(media: Media): void {
        this.media.push(media);
    }

    playAll(): void {
        this.media.forEach((media) => media.play());
    }
}

const playerFacade = new MultimediaPlayerFacade();
const audio1 = new Audio("Song 1");
const audio2 = new Audio("Song 2");
const video1 = new Video("Film 1");
