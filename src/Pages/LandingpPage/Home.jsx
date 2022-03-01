import axios from 'axios'
import React, { useEffect, useState } from 'react'

import "./Home.css"

function Home() {
    const [resource, setresource] = useState([])

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        await axios.get("http://hapi.fhir.org/baseR4/metadata").then((res) => {
            console.log(res.data.rest[0].resource)
            setresource(res.data.rest[0].resource)
        }).catch((err) => {
            console.log(err)
        })

    }

    console.log(resource.type)
    const observation = (e) => {
        alert(e.target.value)
    }


    const Resource = () => {
        return (
            <article className="resource">

                <div className="heading">
                    <h3>RESOURCES:</h3>
                </div>

                <article className="input">
                    <select className="dropdown" onChange={observation}>
                        {
                            resource.map((data, index) => {
                                return (

                                    <option value={data.type} key={index}>{data.type}</option>

                                )
                            })
                        }
                    </select>


                </article>


                <div className="heading">
                    <h3>OPTIONS:</h3>
                </div>

                <article className="option">
                    <article className="input">
                        <label htmlFor="">Encoding:</label>
                        <select className="dropdown2">
                            <option value="1">Observation</option>
                            <option value="2">Saab</option>
                            <option value="3">Opel</option>
                            <option value="4">Audi</option>
                        </select>

                    </article>
                    <article className="input">
                        <label htmlFor="">Prety:</label>
                        <select className="dropdown2">
                            <option value="1">Observation</option>
                            <option value="2">Saab</option>
                            <option value="3">Opel</option>
                            <option value="4">Audi</option>
                        </select>

                    </article>
                    <article className="input">
                        <label htmlFor="">Summary:</label>
                        <select className="dropdown2">
                            <option value="1">Observation</option>
                            <option value="2">Saab</option>
                            <option value="3">Opel</option>
                            <option value="4">Audi</option>
                        </select>

                    </article>
                </article>

                <div className="heading">
                    <h3>RESOURCES:PATENT </h3>
                </div>

                <article className="center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, a.</p>

                    <article className="btn">

                        <p className="button">Search</p>
                        <p className="button"> Query</p>
                        <p className="button">CURD</p>

                    </article>
                </article>


            </article>
        );
    }
    const Searchparmater = () => {
        return (
            <article className="search">
                <article className="searchheading">
                    <h2>Search Paramater</h2>

                    <form className="example" >
                        <input type="text" placeholder="Sort.." name="search2" />
                        <button type="submit"><i class="fa fa-filter"></i></button>
                    </form>
                </article>

                <article className="calander">
                    <article>
                        <button type="submit" className="icon"><i class="fa fa-plus"></i></button>
                        <select className="dropdowncal1">
                            <option value="1">Observation</option>
                            <option value="2">Saab</option>
                            <option value="3">Opel</option>
                            <option value="4">Audi</option>
                        </select>
                    </article>

                    <article>
                        <select className="dropdowncal">
                            <option value="1">Eq</option>
                            <option value="2">Saab</option>
                            <option value="3">Opel</option>
                            <option value="4">Audi</option>
                        </select>
                        <input type="date" id="birthday" name="birthday"></input>
                    </article>

                    <article>
                        <select className="dropdowncal">
                            <option value="1">Eq</option>
                            <option value="2">Saab</option>
                            <option value="3">Opel</option>
                            <option value="4">Audi</option>
                        </select>
                        <input type="date" id="birthday" name="birthday"></input>
                    </article>

                </article>
                <article className="searchbt">
                    <button className="searchbt1" >Search</button>
                </article>
            </article>
        );
    }
    const Result = () => {
        return (
            <article className="resource">
                <h2>Result:</h2>
                <article className="result">
                    <p className="resultlabel">Resurce type</p>
                    <p className="resulttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="resultlabel">Resurce type</p>
                    <p className="resulttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="resultlabel">Resurce type</p>
                    <p className="resulttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="resultlabel">Resurce type</p>
                    <p className="resulttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="resultlabel">Resurce type</p>
                    <p className="resulttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="resultlabel">Resurce type</p>
                    <p className="resulttext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


                </article>

            </article>
        )
    }




    return (
        <>
            <article className="main">
                <Resource />
            </article>
            <Searchparmater />
            <Result />

        </>

    )
}

export default Home;
