import styled from "styled-components";

export const AppCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  transform: translateY(25%);

  header{
    text-align: center;
  }
`

export const DivNavLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        margin-right: 1rem;
        text-decoration: none;
        font-weight: 600;
        color: #333;
    }

    .LinkActiveA{
        color: #A8D1D1;
    }
    .LinkActiveB{
        color: #FD8A8A;
    }
    .LinkActiveC{
        color: #9EA1D4;
    }
    .LinkActiveD{
        color: #A3BB98;
    }
`
//styled ใช้กับ NavLink ไม่ได้ถ้าใช้จะใช้ function เงื่อนไขไม่ได้

// const LinkA = styled(NavLink)`
//     margin-right: 1rem;
//     text-decoration: none;
//     font-weight: 600;
//     color: #333;
// `

export const DivCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h4{
        color: #333;
    }
`

export const DivLink = styled.div`
    display: block;

    a{
        text-decoration: none;
        color: #333;
    }
`