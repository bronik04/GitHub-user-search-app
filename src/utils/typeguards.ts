import {GitHabUser} from "../types";

export const isGitHabUser = (user: any): user is GitHabUser => 'id' in user;