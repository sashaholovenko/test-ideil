import {Match} from "../modules/types.ts";

export enum matchStatus {
    ONGOING,
    FINISHED_NO_NEXT,
    FINISHED_WITH_NEXT
}

export function formatUrl ( match: Match, data: Match[], index: number ) {

    const userDate = new Date()
    const matchDate = new Date(match.attributes.matchDate)

    if ( match.attributes.winner === null && userDate > matchDate ) {
        return matchStatus.ONGOING
    }

    if ( data.slice(index).find((elem) => elem.attributes.teams.data[0].attributes.name === match.attributes.teams.data[0].attributes.name &&
        elem.attributes.teams.data[1].attributes.name === match.attributes.teams.data[1].attributes.name || elem.attributes.teams.data[0].attributes.name === match.attributes.teams.data[1].attributes.name &&
        elem.attributes.teams.data[1].attributes.name === match.attributes.teams.data[0].attributes.name)
    ) {
        return matchStatus.FINISHED_WITH_NEXT
    } else {
        return matchStatus.FINISHED_NO_NEXT
    }


}