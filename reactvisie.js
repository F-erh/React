import React, { useState, useEffect, useRef } from 'react'
import styles from './Listing.module.scss'
import ModalForm from './modal/ModalForm'
import onOpen from './modal/ModalForm'

const apis = {

    homologa: {
        baseURL: 'https://api.catalogo-yandeh.a.visie.link',
        resource: {}
    },
    keyclock: {
        baseURL: 'https://sso-dev.yandeh.com.br/auth/realms/YandehQA/protocol/openid-connect',
        resource: {
            auth: '/token'
        }, 
    },
}

export default function Listing(props) {

    console.log('Componente Listagem')

    const test = useRef()   
    const [loading,setLoading] = useState(true)
<<<<<<< Updated upstream
    const [visibleModal,setVisibleModal] = useState(false)
    const [prodList,setProdList] = useState([])
    const [opCrud,setOpCrud] = useState(null)
=======
    const [openModal, setOpenModal] = useState(true)
>>>>>>> Stashed changes
    const productContent = props.module == 'produto' && props.content == 'produto'
    let prodListData = null

    console.log(props)

<<<<<<< Updated upstream
    function addProduct(event){
        setVisibleModal(true)
        setOpCrud('post')
=======
    function callModal(event){
        console.log(event)
        setOpenModal(true)
>>>>>>> Stashed changes
    }

    async function getListProduct(){
        console.log('Listando dados de produto...')
        const endpoint = `${apis.homologa.baseURL}/produto`
        
        console.log(endpoint)
        
        await fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setProdList(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log('Componente Montado/Renderizado...')
        
        if(productContent){
            console.log('Fazer get em catalogo para produtos') 
            getListProduct()    
        }
    },[test])

    useEffect(() => {
        // POST
        async function postListProduct() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                                        "categoria":"",
                                        "nome":"",
                                        "marca":"",
                                        "sku":""
                                    })
            };
            const response = await fetch('https://api.catalogo-yandeh.a.visie.link/produto/${id}', requestOptions);
            const data = await response.json();
            postListProduct(data.id);
        }
    
        postListProduct();
    }, []);


    useEffect(() => {
        // PUT 
        async function putListProduct() {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                                        "categoria":"",
                                        "nome":"",
                                        "marca":"",
                                        "sku":""
                                    })
            };
            const response = await fetch('https://api.catalogo-yandeh.a.visie.link/produto/${id}', requestOptions);
            const data = await response.json();
            putListProduct(data.id);
        }
    
        putListProduct();
    }, []);

    useEffect(() => {
        // DELETE
        async function deleteListProduct() {
            await fetch('https://api.catalogo-yandeh.a.visie.link/produto/${id}', { method: 'DELETE' });
            alert('Delete successful');
        }
    
        deleteListProduct();
    }, []);
    
    return (
<<<<<<< Updated upstream
        <>  
            <ModalForm visible={visibleModal} opCrud={opCrud} content={props.content} />
            <div onClick={addProduct}><h1>Adicionar</h1></div>
=======
        <>
            <div><ModalForm /></div>
            <div onClick={callModal}><h1>Adicionar</h1></div>
>>>>>>> Stashed changes
            <div className={styles['container']}>
                {loading ? <p>Carregando catálogo de produtos...</p> : 
                    <div className={`${styles['container__list']} -product`}>
                        <ul className={styles['list-head']}>
                            <li className={styles['list-head__item']}># ID</li>
                            <li className={styles['list-head__item']}>categoria</li>
                            <li className={styles['list-head__item']}>Nome</li>
                            <li className={styles['list-head__item']}>marca</li>
                            <li className={styles['list-head__item']}>sku</li>
                            <li className={styles['list-head__item']}>Editar</li>
                            <li className={styles['list-head__item']}>Deletar</li>
                        </ul>
                        {prodList.map((prod,index) => 
                            <ul key={index} className={styles['list-body']}>
                                <li className={styles['list-body__item']}>{prod.id}</li>
                                <li className={styles['list-body__item']}>{prod.categoria}</li>
                                <li className={styles['list-body__item']}>{prod.nome}</li>
                                <li className={styles['list-body__item']}>{prod.marca}</li>
                                <li className={styles['list-body__item']}>{prod.sku}</li>
                                <li className={styles['list-body__item']}>icon editar</li>
                                <li className={styles['list-body__item']}>icon deletar</li>
                            </ul>)
                        }
                    </div> 
                }
            </div>
        </>
    )
}
