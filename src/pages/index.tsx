import Section13 from "@component/home-1/Section13";
import MainComponent from "@component/Main/main";
import AppLayout from "../components/layout/AppLayout";
import 'bootstrap/dist/css/bootstrap.css'; 




const IndexPage = () => {
  return (
    <main>
            <MainComponent />
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
