import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout/layout";
import Cookie from 'js-cookie';

interface HomeProps {
  dataUsers: Array<any>;
}

export default function Home(props: HomeProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle='Home Page'>
      <div className="row row-cols-2">
        {dataUsers.map((home) => {
          return (
            <div className="col p-3" key={home.id} onClick={async () => {
              const token = Cookie.get('rememberMe')?.toString()
              if (token?.length == 0) {
                alert('login dulu')
                router.push('/')
              } else {
                axios({
                  method: "GET",
                  url: `${process.env.URL}/users/search/detail/profile`,
                  headers: { 'token': `${token}` }
                }).then((res) => {
                  const role = res.data.response.role.name_role
                  if (role != undefined && role == 'admin') {
                    router.push(`/users/${home.id}`)
                  } else {
                    alert('anda bukan admin')
                  }
                }).catch((err) => {
                  console.log(err)
                })
              }
            }}>
              <div className="card-custom col d-flex p-3">
                <Image src={home.photo} width={80} height={80} alt="profile" />
                <div className="row ms-4">
                  <h4 className="m-0 p-0">{home.name}</h4>
                  <p className="m-0 p-0">{home.position}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.URL}/users/search/role/2`);
  const dataUsers = res.data.response;
  return {
    props: {
      dataUsers,
    }
  }
}