import { UPSERT_RIDE, ERROR_RIDE } from 'ride-viewer/actions'

export default function(state, action) {
  switch (action.type) {
    case UPSERT_RIDE:
      return { ...state, ...action.ride };
    case ERROR_RIDE:
      return { ...state, error: action.error };
    default:
      return state || {};
  }
}