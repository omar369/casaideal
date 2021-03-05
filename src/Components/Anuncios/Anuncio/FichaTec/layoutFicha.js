import React, { useEffect, useState } from 'react';
import { PDFViewer, Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { Container, Typography } from '@material-ui/core';

import styleSheet from './stylesPDF.js';

const LayoutFicha = ({anuncio})=>{
    const anuncioInfo = anuncio;
    const fotosLength = anuncioInfo.fotos.length;
    const styles = styleSheet;
    const url = 'https://casa-ideal.herokuapp.com/anuncios/fotos/';

    return(
    <Container style={{width:'100%', height:'100%'}}>
        <PDFViewer className="pdfView" style={{width:'90vw', height:'80vh', margin:'2em 0.5em 1em 0.5em'}}>
            <Document size="A4">
            <Page style={styles.page}>

                <View style={styles.mainSection}>

                    <View style={styles.logotSection}>
                    <Text style={styles.logo}> Casa Ideal </Text>
                    <Text style={styles.asesor}> Celina Vigil </Text>
                    <Text style={styles.asesorSub}> Asesora Inmobiliaria </Text>
                    <Text style={styles.cel}> Cel. 4422075606 </Text>
                    <Text style={styles.mail}> cinexvq.33@gmail.com </Text>
                    </View>

                    <View style={styles.specsSection}>

                    <Text style={styles.tipo}>{`Terreno: ${anuncioInfo.ground} m2`}</Text>
                    <Text style={styles.tipo}>{`Construcción: ${anuncioInfo.construction} m2`}</Text>
                    <Text style={styles.tipo}>{`Tipo de Inmueble: ${anuncioInfo.type}`}</Text>
                    <Text style={styles.rec}>{`Recamaras: ${anuncioInfo.bedrooms}`}</Text>
                    <Text style={styles.tipo}>{`Baños: ${anuncioInfo.bathrooms}`}</Text>
                    <Text style={styles.rec}>{`Medio Baño: ${anuncioInfo.halfBathrooms}`}</Text>
                    <Text style={styles.rec}>{`Estacionamiento: ${anuncioInfo.parking}`}</Text>
                    </View>

                    <View style={styles.rightSection}>
                    <Text style={styles.titulo}>{anuncioInfo.title}</Text>
                    <View style={styles.rowTitleSection}>
                    { anuncioInfo.salePrice ? <Text style={styles.precio}>{`Venta: $ ${anuncioInfo.salePrice}.°°  |`}</Text> : <Text> </Text> }
                    { anuncioInfo.rentPrice ? <Text style={styles.precio}>{`Renta: $ ${anuncioInfo.rentPrice}.°°  |`}</Text> : <Text> </Text> }
                    </View>
                    <Text style={styles.clave}>{`Dirección: ${anuncioInfo.address}`}</Text>
                    <Image src={anuncioInfo.portrait} style={styles.imagenPortada} alt="portada"/>
                    </View>

                    <View style={styles.descripSection}>{
                    (anuncioInfo.description.length < 400)
                        ? <Text style={styles.descripText}>{anuncioInfo.description}</Text>
                        : <Text style={styles.descripTextLarge}>{anuncioInfo.description}</Text>
                    }
                    </View>
                    
                    <View style={styles.bottomImgSection}>

                    { fotosLength > 0 ? <Image src={`${url + anuncioInfo.fotos[0].filename}`} style={styles.imagenSegunda} alt="omg"/> : <></>}

                    { fotosLength > 1 ? <Image src={`${url + anuncioInfo.fotos[1].filename}`} style={styles.imagenTercera} alt="omg"/> : <></>}

                    </View>
                </View>

                { (fotosLength > 2) ?
                    (   <View style={styles.mainSection}>
                        <View style={styles.colImgSection}>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 2 ? <Image src={`${url + anuncioInfo.fotos[2].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 3 ? <Image src={`${url + anuncioInfo.fotos[3].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 4 ? <Image src={`${url + anuncioInfo.fotos[4].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 5 ? <Image src={`${url + anuncioInfo.fotos[5].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 6 ? <Image src={`${url + anuncioInfo.fotos[6].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 7 ? <Image src={`${url + anuncioInfo.fotos[7].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                        </View>
                        </View>)
                        : (<></>)
                }
                

                { (fotosLength > 8) ?
                    (   <View style={styles.mainSection}>
                        <View style={styles.colImgSection}>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 8 ? <Image src={`${url + anuncioInfo.fotos[8].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 9 ? <Image src={`${url + anuncioInfo.fotos[9].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 10 ? <Image src={`${url + anuncioInfo.fotos[10].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 11 ? <Image src={`${url + anuncioInfo.fotos[11].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 12 ? <Image src={`${url + anuncioInfo.fotos[12].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 13 ? <Image src={`${url + anuncioInfo.fotos[13].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                        </View>
                        </View>)
                        : (<></>)
                }

                { (fotosLength > 14) ?
                    (   <View style={styles.mainSection}>
                        <View style={styles.colImgSection}>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 14 ? <Image src={`${url + anuncioInfo.fotos[14].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 15 ? <Image src={`${url + anuncioInfo.fotos[15].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 16 ? <Image src={`${url + anuncioInfo.fotos[16].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 17 ? <Image src={`${url + anuncioInfo.fotos[17].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                            <View style={styles.rowImgSection}>
                            { fotosLength > 18 ? <Image src={`${url + anuncioInfo.fotos[18].filename}`} style={styles.img} alt="img"/> : <></>}
                            { fotosLength > 19 ? <Image src={`${url + anuncioInfo.fotos[19].filename}`} style={styles.img} alt="img"/> : <></>}
                            </View>
                        </View>
                        </View>)
                        : (<></>)
                }

            </Page>
            </Document>
        </PDFViewer>
        </Container>
        )
}

export default LayoutFicha;