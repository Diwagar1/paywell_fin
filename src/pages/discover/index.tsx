import React from 'react'
import AppLayout from "../../components/layout/AppLayout";
import Section2 from "../../components/home-1/Section2";
import Section3 from "../../components/home-1/Section3";
export default function IndexPage() {
    return (
        <div >
            <Section2/>
            <Section3/>
        </div>
    )
}

IndexPage.layout = AppLayout