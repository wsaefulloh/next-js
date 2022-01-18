import Layout from "../../components/Layout/layout";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  email: string;
  position: string;
  photo: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="Detail User Page">
      <div>
        <div className="d-flex">
          <div className="col-4">
          <Image src={user.photo} width={300} height={300} alt="profile" />
          </div>
          <div className="col mt-5">
            <h2 className="mb-4">Detail User</h2>
            <div className="row">
              <div className="col-2">
                <p>Nama</p>
                <p>Email</p>
                <p>Position</p>
              </div>
              <div className="col-1">
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="col">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.position}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-5">Description</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, veniam
          dolore. Tempore hic earum distinctio repudiandae recusandae
          exercitationem impedit placeat delectus? Quas laboriosam optio
          quibusdam obcaecati cumque blanditiis iusto in. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Optio, consequatur modi. Cum dolore
          recusandae quo praesentium voluptates maxime voluptatem ratione
          corporis iusto, nemo laudantium aperiam similique porro maiores, autem
          sit!
        </p>
      </div>
    </Layout>
  );
}

export async function getServerSidePath() {
  const res = await axios.get(`${process.env.URL}/users/search/role/2`);
  const dataUsers = await res.data.response;
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps(context: GetProps) {
  const { id } = context.params;
  const res = await axios.get(`${process.env.URL}/users/${id}`);
  const user = await res.data.response;
  return {
    props: {
      user,
    },
  };
}
