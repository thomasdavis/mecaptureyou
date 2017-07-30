export default {
  example: (state = {}, { type, payload }) => {
    switch (type) {
      case 'EXAMPLE_ACTION':
        return {
          ...state
        }
      default:
        return state
    }
  },
  user: (state = {}, { type, payload }) => {
    switch (type) {
      case 'EXAMPLE_ACTION':
        return {
          ...state
        }
      default:
        return state
    }
  },
}
