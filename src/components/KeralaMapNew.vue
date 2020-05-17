<template>
    <v-card color="transparent" elevation="0" height="300px">
         <div :id="svgId" class="svg-container"></div>
   </v-card>
</template>
<script>

    import keralaMap from "../assets/keralaMap"
    export default {
        name: "KeralaMapNew",
        data: function () {
            return {
                svgId: "keralaMap",
                mapAttr: {
                    viewBoxWidth: 450,
                    viewBoxHeight: 450,
                    imageWidth: 450,
                    imageHeight: 450,
                },
                svgContainer: null,
                currentDist: '',
            }
        },
        mounted: function () {
            this.generateVenueMap()
        },
        methods: {
            generateVenueMap: function () {
                const vue = this;
                const mapData = keralaMap.g
                const svgContainer = vue.$svg("keralaMap").size('100%', '100%').viewbox(200, 75, vue.mapAttr.viewBoxWidth, vue.mapAttr.viewBoxHeight);
                vue.svgContainer = svgContainer;
                mapData.forEach((pathObj) => {
                    vue.generatePath(svgContainer, pathObj.path);
                   
                })
            },
            generatePath: function (svgCont, pathObj) {
               const vue = this;
               const attrs = {
                   'id': pathObj["@id"],
                    //'fill': pathObj["@fill"],
                    'fill': "rgb(117, 9, 9)",
                    'çlass': ".dist",
                    'stroke-width': pathObj["@stroke-width"],
                    'title': pathObj["-title"],
                    'map-id': pathObj["@id"],
                    'stroke-linejoin': pathObj["@stroke-linejoin"],
                    'stroke-linecap': pathObj["@stroke-linecap"],
                    'fill-rule': pathObj["@fill-rule"],
                    'stroke': pathObj["@stroke"],
                    'stroke-opacity': pathObj["@stroke-opacity"],
                };
                const element = svgCont.path(pathObj["@d"]).attr(attrs);
                element.click(function() {
                    const vue2 = this;
                    alert('clicked');
                    let mapId = this.node.attributes["map-id"].value;
                    alert(mapId);
                    vue2.fill({ color: '#fff' });
                    console.log(vue.svgId);
                    console.log(vue.$store.state.dist);
                    vue.$store.commit('setDistrict', 'kottayam');
                })

                element.on('mouseover', () =>{
                    
                    //const vue3 = this;
                    let mapId = element.node.attributes["map-id"].value;
                    console.log(this.$store.getters.getPlaceById(mapId).district);
                    let districtName = this.$store.getters.getPlaceById(mapId).district;
                    let lat = this.$store.getters.getPlaceById(mapId).latitude;
                    this.$store.commit('setDistrict', districtName);
                    this.$store.commit('setLat', lat);
                   // alert('hover');
                  // console.log(obj);
                    element.animate(180).fill({ color: "rgb(161, 14, 14)" })
                    
                })

                element.on('mouseout', () =>{
                    //const vue3 = this;
                   // alert('hover');
                    element.animate(180).fill({ color: 'rgb(117, 9, 9)' })
                    this.$store.commit('setDistrict', '');
                })
                
            }
        }

    }
</script>
<style scoped>
 .dist {
     color: rgb(109, 106, 106)
 }
</style>