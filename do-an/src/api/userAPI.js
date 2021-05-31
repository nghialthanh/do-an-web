  
import axiosApi from "./Config";

const userApi = {
    //---------- get course of studenid --------//
    getCourseofStudent : (id) => {
        const url = '/api/CourseDetail/all/course/'+id;
        return axiosApi.get(url);
    },
    getCourseofTeacher : (id) => {
        const url = '/api/Employee/teacher/allcourse/'+id;
        return axiosApi.get(url);
    },
    getCourseNotLearn: (id) => {
        const url = '/api/course/All/'+id+'/noregister';
        return axiosApi.get(url);
    },
    //------------ get roll-call student -----------//
    getRollCallStudent: (id,courseid) => {
        const url = '/api/parent/manage/'+id+'/'+courseid;
        return axiosApi.get(url);
    },
    //------------ Change Pass --------------------//
    ChangePassStudent: (params) => {
        const url = '/api/auth/student/ChangePassword';
        return axiosApi.post(url, {...params});
    },
    ChangePassEmployee: (params) => {
        const url = '/api/auth/employee/ChangePassword';
        return axiosApi.post(url, {...params});
    },
    getRollCallteacher: (params) => {
        const url = '/api/Employee/manage/ver2';
        return axiosApi.get(url, {...params});
    },
    postRollCall: (id,params) => {
        const url = '/api/attendance/course/'+id;
        return axiosApi.post(url, {...params});
    },
}
export default userApi;