import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: "http://127.0.0.1:8080/",
  withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Origin": "http://127.0.0.1:8080/",
  //   "Access-Control-Allow-Credentials": "true",
  //   "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT",
  //   "Access-Control-Allow-Headers":
  //     "Content-Type, Signature, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  //   "Content-Type": "application/json",
  // },
});

// axiosApiInstance.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axiosApiInstance.defaults.baseURL = "http://127.0.0.1:8080/";

// Add a request interceptor
axiosApiInstance.interceptors.request.use(
  function (config) {
    // config.headers.set("withCredentials", "true");
    // config.headers.set("Access-Control-Allow-Origin", "http://127.0.0.1:8080/");
    return config;
  },
  function (error) {
    // Do something with request erro
    console.log("error in request axios");
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiInstance.interceptors.response.use(
  function (response) {
    console.log("response : ", response);

    const setCookieHeader = response.headers.get("Set-Cookies");
    console.log("cookie  : ", setCookieHeader);
    if (setCookieHeader) {
      // Parse the Set-Cookie header and handle the cookies
      console.log("Set-Cookie header:", setCookieHeader);
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // response.headers.set("Access-Control-Allow-Origin", "*");
    // console.log(response);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status === 403) {
    //   if (error.response.data.msg !== "jwt expired") {
    //     // Cookies.remove("token");
    //     // Cookies.remove("refreshToken");
    //     window.location.href = "/auth/login";
    //   } else {
    //     const refreshToken = Cookies.get("refreshToken");
    //     axiosApiInstance
    //       .post("/auth/user/refresh", { refreshToken })
    //       .then((res) => {
    //         Cookies.set("token", res.data.data.token);
    //         Cookies.set("refreshToken", res.data.data.refreshToken);
    //         window.location.reload();
    //       })
    //       .catch(() => {
    //         Cookies.remove("token");
    //         Cookies.remove("refreshToken");
    //         window.location.href = "/auth/login";
    //       });
    //   }
    // }

    console.log("error in response axios");

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
