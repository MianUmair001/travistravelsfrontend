const initialState = {
  noOfBathroom: null,
  noOfBeds:null,
  type:null,
  planName:null,
  hotel:null,
  images=null,
  price:null,
  error:null,
  loading:false,
};

const allRoomsInitialState = { rooms: [], error: null, loading: null };

export const roomReducer = (prevState = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_ROOM_REQUEST:
        return {
          ...prevState,
          loading: true,
        };
  
      case CREATE_ROOM_SUCCESS:
        return {
            noOfBathroom: payload.noOfBathroom,
            noOfBeds:payload.noOfBeds,
            type:payload.type,
            planName:payload.planName,
            hotel:payload.hotel,
            images=payload.images,
            price:payload.price,
          };
          case   CREATE_ROOM_FAILURE:
              return {
                    ...prevState,
                    error: payload.error,
              }

          }
        };
export const roomsReducer = (prevState = allRoomsInitialState, action) => {
            const { type, payload } = action;
            switch (type) {
              case "GET_ALL_ROOMS_Request":
                return { ...prevState, loading: true };
              case "GET_ALL_ROOMS_SUCCESS":
                return { ...prevState, rooms: payload.data };
              case "GET_ALL_ROOMS_FAIL":
                return [];
              default:
                return prevState;
            }
          };




