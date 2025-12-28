export interface ProjectsCardProps {
    idProject: number,
    projectCategory: string,
    title: string,
    resume: string,
    urlImg: string,
    reverse: boolean
    onClick:() => void;
}