export interface ProjectsCardProps {
    projectCategory: string,
    title: string,
    resume: string,
    urlImg: string,
    reverse: boolean
    onClick:() => void;
}