const API__KEY = "1fa141a092cdb00cf2711911dd44d115";

const requests ={


    action:`https://api.themoviedb.org/3/discover/movie?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`,
    
    originals :`https://api.themoviedb.org/3/discover/tv?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`,
    
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`,
    
    nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`,
    
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`,
    
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`,
    
    latest: `https://api.themoviedb.org/3/movie/comedy?api_key=1fa141a092cdb00cf2711911dd44d115&with_networks=213`
    
    

}




export default requests ;