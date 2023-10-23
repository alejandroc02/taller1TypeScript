export class Serie {
    public id: number;
    public title: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public link: string;
    public image: string;


    constructor(
        id: number,
        title: string,
        channel: string,
        seasons: number,
        description: string,
        link: string,
        image: string
    ) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
