const initialState = {
    characterBanners: [],
    lightconeBanners: [],
    requesting: false
}

const BannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_CHAR_BANNERS_REQUEST":
            return {
                ...state,
                characterBanners: [...state.characterBanners],
                requesting: true
            }
        case "GET_CHAR_BANNERS":
            return {
                ...state,
                characterBanners: action.characterBanners,
                requesting: false
            }
        case "START_GETTING_LIGHTCONE_BANNERS_REQUEST":
            return {
                ...state,
                lightconeBanners: [...state.lightconeBanners],
                requesting: true
            }
        case "GET_LIGHTCONE_BANNERS":
            return {
                ...state,
                lightconeBanners: action.lightconeBanners,
                requesting: false
            }
        default:
            return state;
    }
}

export default BannerReducer;