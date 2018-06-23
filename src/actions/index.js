export const UPSERT_RIDE = 'UPSERT_RIDE'
export const ERROR_RIDE = 'ERROR_RIDE'

export const upsertRide = ride => ({ type: UPSERT_RIDE, ride })
export const errorRide = error => ({ type: ERROR_RIDE, error })

export default { upsertRide };
