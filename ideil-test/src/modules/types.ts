export interface GamesItemProps {
    elem: {
        id: number
        attributes: {
            matchDate: string
            score: string | null
            stageOfMatch: string
            teams: teams
            winner: string
            formatOfMatch: string
        }
    }
}

export interface teams {
    data: {
        0: {
            attributes: {
                name: string,
                    shortName: string | null
            }
        }
        1: {
            attributes: {
                name: string,
                    shortName: string | null
            }
        }
    }
}


export interface Match {
    id: number;
    attributes: {
        matchDate: string;
        teamOneId: number | null;
        teamTwoId: number | null;
        winner: string | null;
        score: string;
        stageOfMatch: string;
        formatOfMatch: string;
        tournament: string;
        teams: {
            data: Team[];
        };
    };
}

export interface Team {
    id: number;
    attributes: {
        name: string;
        shortName: string;
        players: {
            data: Player[];
        };
    };
}

export interface Player {
    id: number;
    attributes: {
        name: string;
        nickname: string;
    };
}