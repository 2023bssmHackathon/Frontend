import styled from "styled-components";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { useQuery } from "react-query";
import { getFeed, getImgPath } from "../../api/feed/api";
import { useLocation } from "react-router";
import { useEffect } from "react";


function Detail({img, title, price, uploadTime}) {
    const { pathname } = useLocation();
    const { id } = useParams();

    return (
        <Layout>
            
        </Layout>
    );
  }
  
export default Detail;