export type LocalGitHabUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string | null,
    blog: string,
    location: string,
    bio: string | null,
    twitter: string | null,
    repos: number,
    followers: number,
    following: number,
    created: string,
}

export type GitHabUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string | null,
    blog: string,
    location: string,
    bio: string | null,
    twitter_username: string | null,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

export type GitHabError = {
    message: string,
    documentation_url: string,
}