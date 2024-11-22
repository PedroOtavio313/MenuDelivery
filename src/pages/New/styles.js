import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header" 
    "content"
    "footer"
    ;
    `

export const Form = styled.form`
    max-width: 550px;
    margin: 175px auto;

    .plate-options label{
       font-size: 20px;
       color: #ccc;
    }

    .dropdown{
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border: 1px solid #333;
        border-radius: 5px;
        padding: 10px;
        margin-left: 10px;
        font-size: 15px;
        outline: none;
        appearance: none;
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='gray' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 14px;
    }

    .dropdown{
        
    }

    .dropdown:focus{
        border-color: #555;
    }
  

    >  header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;
        
    }

    a {
        font-size: 30px;
        font-weight: bold;
    }

   
    `