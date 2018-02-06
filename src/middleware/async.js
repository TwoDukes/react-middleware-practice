export default ({dispatch}) => {
  return next => action => {
    //if action does not have a payload or if it does not have a promise
    //send it to next middleware
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    action.payload.then(Response => {
      const newAction = {...action, payload: Response.data};
      dispatch(newAction);
    });
  }
}