import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAbRrrV0995FGvFAjQiFXXldVf9sUiESQ",
    authDomain: "e-commerce-24aa0.firebaseapp.com",
    projectId: "e-commerce-24aa0",
    storageBucket: "e-commerce-24aa0.appspot.com",
    messagingSenderId: "173335211246",
    appId: "1:173335211246:web:79b94a8f20925e007d17ff",
};

initializeApp(firebaseConfig);

export const Auth = getAuth();
