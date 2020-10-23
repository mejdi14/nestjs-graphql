export declare enum PatchSize {
    SMALL = "SMALL",
    LARGE = "LARGE"
}
export interface Launch {
    id: string;
    site?: string;
    mission?: Mission;
    launch_year?: string;
    launch_date_local?: Date;
    launch_date_utc?: Date;
    launch_date_unix?: number;
    fire_date_utc?: Date;
    fire_date_unix?: number;
    rocket?: Rocket;
    links?: Link;
}
export interface Link {
    article_link?: string;
    wikipedia?: string;
    video_link?: string;
    youtube_id?: string;
}
export interface Rocket {
    id: string;
    name?: string;
    type?: string;
}
export interface Mission {
    name?: string;
    missionPatch?: string;
}
export interface IQuery {
    launches(): Launch[] | Promise<Launch[]>;
    launch(id: string): Launch | Promise<Launch>;
}
