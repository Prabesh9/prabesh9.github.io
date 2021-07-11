export class Markdown {

    id: string;
    title: string;
    description: string;
    content: string;
    tags: string[];
    aurthor: string;
    timedate: number;

    constructor(
        id?: string,
        title?: string,
        description?: string,
        content?: string,
        tags?: string[],
        aurthor?: string,
        timedate?: number,
    ) {
        this.id = id ?? "000";
        this.title = title ?? "";
        this.description = description ?? "No description";
        this.content = content ?? "";
        this.tags = tags ?? [];
        this.aurthor = aurthor ?? "Prabesh Maharjan";
        this.timedate = timedate ?? -1;
    }

}
