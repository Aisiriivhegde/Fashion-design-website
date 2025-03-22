const backendDomin= ProcessingInstruction.env.REACT_APP_BACKEND_URL ||"http://localhost:8080";
const SummaryApi={
    signUp:{
        url:`${backendDomin}/api/signup`,
        method:"post",      
    },
    signIn:{
        method:"post" 
    },
    AddDesign:{
        url:`${backendDomin}/api/save-design`,
        method:"post"
    },
    getDesign:{
        url:`${backendDomin}/api/getDesign`,
        method:"get"
}
};
export default SummaryApi;
