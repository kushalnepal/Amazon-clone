import { notify } from "./toastr";


export const handleError = (error) => {
    debugger;
    // setps
    // 1. check error
    // 2.parse error
    // 3.prepare error message
    // 4. show them in UI

    let err = error && error.response;
    let errMsg = 'something went wrong';
    if (err) {
        if (err.data) {
            errMsg = err.data.msg;
        }
    }
    // todo add another logic to finalize error message


    notify.showError(errMsg);

}
