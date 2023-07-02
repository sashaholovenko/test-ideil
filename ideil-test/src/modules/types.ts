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