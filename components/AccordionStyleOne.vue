<template>
    <div class="agency-accordion">
       
        <b-card no-body>
            <b-card-header header-tag="header" class="card-header">
                <b-button block v-b-toggle.accordion-1 class="acc-btn border-0 text-left">
                    <strong>FOCODDEV 2022 (Du 4 au 10 juin 2022 au Canada)</strong>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        <div class="row">
                            <div class="col col-sm-12 col-md-3">
                                <img src="/images/event/fia.jpg"  alt="" align="center" srcset="">
                            </div>
                            <div class="col col-sm-12 col-md-9 p-3">
                                <br>
                                <h1>FOCODDEV 2022</h1>
                                <hr>
                                La 7ème édition du Forum pour la coopération décentralisée et le développement durable (FOCODDEV) aura lieu au Canada du 4 au 10 juin 2022. Il s’agit d’un événement organisé chaqu’année par le Réseau pour la Coopération décentralisée et le Développement Durable (RC3D). L’édition de cette année a pour thème « L’efficacité des jumelages et des partenariats Afrique-Canada : Enjeux, défis et réalisations. »
                                <br>
                                <br>
                                <a href="" class="btn btn-primary">lire plus</a>
                            </div>
                        </div>
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header" class="card-header">
                <b-button block v-b-toggle.accordion-2 class="acc-btn border-0 text-left">
                  <strong> FIAA 2022 (Du 14 au 20 juin à Philadelphie) </strong> 
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                   
                    <b-card-text >
                        <div class="row">
                            <div class="col col-sm-12 col-md-3">
                                <img src="/images/event/focodevv.jpg" align="left" alt="" srcset="">
                        
                            </div>
                            <div class="col col-sm-12 col-md-9">
                                
                                <br>
                                <h1>FIAA 2022</h1>
                                <hr>
                                    La Foire internationale d’Afrique et d’Amérique (FIAA) aura lieu à Philadelphie aux États-Unis du 14 au 20 juin 2022.  Il s’agit d’un rendez-vous économique de premier plan entre les investisseurs africains et ceux de cette grande ville de l’État de Pennsylvanie.
                                <br>
                                <br>
                               
                                <n-link to="/fia" class="btn btn-primary">lire plus</n-link>
                            </div>
                        </div>
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        
    </div>
</template>