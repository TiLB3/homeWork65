import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../AxiosApi.ts";
import type {Page} from "../../types";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const Home = () => {
  const [page, setPage] = useState<Page | null>(null);
  const {pageName} = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const fetchPage = useCallback(async (pageName?: string) => {
    try {
      setIsLoading(true);
      console.log(pageName)
      const {data: response} = await axiosApi<Page>(pageName ? `/pages/${pageName}.json` : "/pages/home.json");
      if (response) {
        setPage(response);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);


  useEffect(() => {

    if (pageName) {
      void fetchPage(pageName);
    } else {
      void fetchPage();
    }
  }, [fetchPage, pageName]);

  return (
    <div>


      <Spinner isLoading={isLoading} />
      {page?.title}
    </div>
  );
};

export default Home;