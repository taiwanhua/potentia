import React, { useState, useEffect } from 'react';
import { StyledLeftDrawer, StyledLeftBarList } from './Drawer';
import { Container, SubContainer } from './Container';
import { useForm } from './useForm'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Switch, Route } from 'react-router-dom';


function App() {

  const [Ac, Achandler, AcregExpResult] = useForm("", "^[a-zA-Z0-9]{0,10}$");
  const [Ps, Pshandler, PsregExpResult] = useForm("", "^[a-zA-Z0-9]{0,10}$");
  const [Check, setCheck] = useState(false);
  const [Sumbit, setSumbit] = useState({
    method: 'POST', headers: {
      'content-type': 'application/json'
    }, first: 0
  });

  const [Auth, setAuth] = useState(null);

  const handleChange = (event) => {
    setCheck(!Check);
  };

  useEffect(() => {
    const MyFetch = async (Url_, Parma_ = {}) => {
      try {
        const Response = await fetch(Url_, Parma_)
          .then(Result => {
            const ResultJson = Result.clone().json();//Respone.clone()

            return ResultJson;
          })
          .then((PreResult) => {
            setAuth(PreResult)
            console.log(PreResult)
            return PreResult;
          })
          .catch((Error) => {

          })
          .finally(() => {

          });

        return Response;
      } catch (Error) {

      }
    }
    if (Sumbit.first > 0) {
      MyFetch(`https://api-test.potentia.tech/api/login`, Sumbit)
    }
  }, [Sumbit])


  const goSumbit = () => {

    if ((AcregExpResult ? false : true) && (PsregExpResult ? false : true) && Ac !== "" && Ps !== "") {
      setSumbit({ ...Sumbit, body: JSON.stringify({ account: Ac, password: Ps }), first: Sumbit.first + 1 });
    }
  }

  const UserInfo = (props) => {
    
    return (
        <>
            account: {Auth.account}
            refreshable_until: {Auth.refreshable_until}
        </>
    )
}

  return (
    <>
      <StyledLeftDrawer></StyledLeftDrawer>
      <StyledLeftBarList id={"asd"}></StyledLeftBarList>

      <Switch>
        <Route exact path={"/"}>
          {(!Auth) ?
            <Container theme={{
              direction: "row", justify: "center", padding: "50px 0px 0px",
              mobileL: {
                padding: "150px 0px 0px 250px",
                justify: "flex-start",
              }
            }}>
              <SubContainer theme={Defaulttheme.main}>
                <Container theme={{ direction: "row" }}>
                  <SubContainer theme={Defaulttheme.input}>
                    帳號 : <input value={Ac} onChange={Achandler} />
                    {AcregExpResult}
                  </SubContainer>
                  <SubContainer theme={Defaulttheme.input}>
                    密碼 : <input type={'password'} value={Ps} onChange={Pshandler} />
                    {PsregExpResult}
                  </SubContainer>
                  <SubContainer theme={Defaulttheme.input}>
                    <FormControlLabel
                      control={<Checkbox checked={Check} onChange={handleChange} name="check" color="primary" />}
                      label="保持登入"
                    />
                  </SubContainer>
                  <SubContainer theme={Defaulttheme.input}>
                    <button onClick={goSumbit}> Go</button>
                  </SubContainer>
                </Container>
              </SubContainer>
            </Container>
            : (
              <Container theme={{
                direction: "row", justify: "center", padding: "50px 0px 0px",
                mobileL: {
                  padding: "150px 0px 0px 250px",
                  justify: "flex-start",
                }
              }}>
                <SubContainer theme={Defaulttheme.main}>
                  <span>歡迎您，{Auth.account}</span>
                </SubContainer>
              </Container>)}
        </Route>
        {/* <Route exact path={"/UserInfo"} children={<UserInfo />} /> */}
      </Switch>
    </>
  );
}

export default App;




const Defaulttheme = {
  main: {
    occupy: "unset",
    width: "15.5rem",
    height: "10rem",
    margin: "0 auto",
    //backgroundColor: "tomato",
    borderTop: "asd",
    border: "solid #191919 0.1rem",
    mobileL: {
      width: "15rem", height: "10rem"
    }
  },
  input: {
    occupy: 12,
  }

};




