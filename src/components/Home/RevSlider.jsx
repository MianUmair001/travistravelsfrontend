import React from "react";

// const img1 = "./assets/images/bg_10.jpg";

const images = "./rev-slider-files/assets/";

const RevSlider = () => {
  return (
    <main>
      <div
        id="rev_slider_54_1_wrapper"
        className="rev_slider_wrapper fullwidthbanner-container"
        data-alias="notgeneric1"
        data-source="gallery"
        style={{
          margin: "0px auto",
          background: "transparent",
          padding: "0px",
          marginTop: "0px",
          marginBottom: "0px",
        }}
      >
        {/* START REVOLUTION SLIDER 5.4.1 fullwidth mode */}
        <div
          id="rev_slider_54_1"
          className="rev_slider fullwidthabanner"
          style={{ display: "none" }}
          data-version="5.4.1"
        >
          <ul>
            {/* SLIDE  */}
            <li
              data-index="rs-140"
              data-transition="zoomout"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed={2000}
              data-thumb="rev-slider-files/assets/100x50_notgeneric_bg1.jpg"
              data-rotate={0}
              data-fstransition="fade"
              data-fsmasterspeed={1500}
              data-fsslotamount={7}
              data-saveperformance="off"
              data-title="Intro"
              data-param1
              data-param2
              data-param3
              data-param4
              data-param5
              data-param6
              data-param7
              data-param8
              data-param9
              data-param10
              data-description
            >
              {/* MAIN IMAGE */}
              <img
                src={images + "notgeneric_bg1.jpg"}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax={10}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 1 */}
              <div
                className="tp-caption NotGeneric-Title   tp-resizeme"
                id="slide-140-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['50','46','36','28']"
                data-lineheight="['46','46','36','28']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"split":"chars","split_direction":"forward","splitdelay":0.05,"speed":2000,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                  lineHeight: "46px",
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                }}
              >
                WELCOME TO TravisTravels{" "}
              </div>
              {/* LAYER NR. 2 */}
              <div
                className="tp-caption NotGeneric-SubTitle   tp-resizeme"
                id="slide-140-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['52','52','52','51']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                TOURS HOTELS RESTAURANTS
              </div>
              {/* LAYER NR. 3 */}
              <div
                className="tp-caption NotGeneric-Icon   tp-resizeme"
                id="slide-140-layer-8"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-68','-68','-68','-68']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 7, whiteSpace: "nowrap", cursor: "default" }}
              >
                <i className="pe-7s-compass" />{" "}
              </div>
              {/* LAYER NR. 4 */}
              <div
                className="tp-caption NotGeneric-Button rev-btn "
                id="slide-140-layer-7"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['124','124','124','123']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1);bc:rgba(255, 255, 255, 1);bw:1 1 1 1;"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[30,30,30,30]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[30,30,30,30]"
                style={{
                  zIndex: 8,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  borderColor: "rgba(255,255,255,0.50)",
                  borderWidth: "1px 1px 1px 1px",
                  outline: "none",
                  boxShadow: "none",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                NEXT GOODIE{" "}
              </div>
              {/* LAYER NR. 5 */}
              <div
                className="tp-caption rev-scroll-btn "
                id="slide-140-layer-9"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['bottom','bottom','bottom','bottom']"
                data-voffset="['50','50','50','50']"
                data-width={35}
                data-height={55}
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-type="button"
                data-actions='[{"event":"click","action":"scrollbelow","offset":"0px","delay":"","speed":"300","ease":"Linear.easeNone"}]'
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:50px;opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 9,
                  minWidth: "35px",
                  maxWidth: "55px",
                  whiteSpace: "nowrap",
                  fontWeight: 100,
                  color: "transparent",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 1px",
                  borderRadius: "23px 23px 23px 23px",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <span />
              </div>
            </li>
            {/* SLIDE  */}
            <li
              data-index="rs-141"
              data-transition="fadetotopfadefrombottom"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="Power3.easeInOut"
              data-easeout="Power3.easeInOut"
              data-masterspeed={1500}
              data-thumb="rev-slider-files/assets/100x50_notgeneric_bg5.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title="Chill"
              data-param1
              data-param2
              data-param3
              data-param4
              data-param5
              data-param6
              data-param7
              data-param8
              data-param9
              data-param10
              data-description
            >
              {/* MAIN IMAGE */}
              <img
                src={images + "notgeneric_bg5.jpg"}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax={10}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 6 */}
              <div
                className="tp-caption NotGeneric-Title   tp-resizeme rs-parallaxlevel-3"
                id="slide-141-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['50','46','36','28']"
                data-lineheight="['46','46','36','28']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"split":"chars","split_direction":"forward","splitdelay":0.05,"speed":2000,"frame":"0","from":"y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                  lineHeight: "46px",
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                }}
              >
                DISCOVER NICE PLACES{" "}
              </div>
              {/* LAYER NR. 7 */}
              <div
                className="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-2"
                id="slide-141-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['52','52','52','51']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                TOURS HOTELS RESTAURANTS
              </div>
              {/* LAYER NR. 8 */}
              <div
                className="tp-caption NotGeneric-Icon   tp-resizeme rs-parallaxlevel-1"
                id="slide-141-layer-8"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-68','-68','-68','-68']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 7, whiteSpace: "nowrap", cursor: "default" }}
              >
                <i className="pe-7s-mouse" />{" "}
              </div>
              {/* LAYER NR. 9 */}
              <div
                className="tp-caption NotGeneric-Button rev-btn "
                id="slide-141-layer-7"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['124','124','124','123']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1);bc:rgba(255, 255, 255, 1);bw:1 1 1 1;"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[30,30,30,30]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[30,30,30,30]"
                style={{
                  zIndex: 8,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  borderColor: "rgba(255,255,255,0.50)",
                  borderWidth: "1px 1px 1px 1px",
                  outline: "none",
                  boxShadow: "none",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                NEXT GOODIE{" "}
              </div>
              {/* LAYER NR. 10 */}
              <div
                className="tp-caption rev-scroll-btn "
                id="slide-141-layer-9"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['bottom','bottom','bottom','bottom']"
                data-voffset="['50','50','50','50']"
                data-width={35}
                data-height={55}
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-type="button"
                data-actions='[{"event":"click","action":"scrollbelow","offset":"0px","delay":"","speed":"300","ease":"Linear.easeNone"}]'
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:50px;opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 9,
                  minWidth: "35px",
                  maxWidth: "55px",
                  whiteSpace: "nowrap",
                  fontWeight: 100,
                  color: "transparent",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 1px",
                  borderRadius: "23px 23px 23px 23px",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <span />
              </div>
              {/* LAYER NR. 11 */}
              <div
                className="tp-caption   tp-resizeme rs-parallaxlevel-8"
                id="slide-141-layer-10"
                data-x="['left','left','left','left']"
                data-hoffset="['680','680','680','680']"
                data-y="['top','top','top','top']"
                data-voffset="['632','632','632','632']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="image"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 10 }}
              >
                <div
                  className="rs-looped rs-pendulum"
                  data-easing="linearEaseNone"
                  data-startdeg={-20}
                  data-enddeg={360}
                  data-speed={35}
                  data-origin="50% 50%"
                >
                  <img
                    src={images + "blurflake4.png"}
                    alt=""
                    data-ww="['240px','240px','240px','240px']"
                    data-hh="['240px','240px','240px','240px']"
                    data-no-retina
                  />{" "}
                </div>
              </div>
              {/* LAYER NR. 12 */}
              <div
                className="tp-caption   tp-resizeme rs-parallaxlevel-7"
                id="slide-141-layer-11"
                data-x="['left','left','left','left']"
                data-hoffset="['948','948','948','948']"
                data-y="['top','top','top','top']"
                data-voffset="['487','487','487','487']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="image"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 11 }}
              >
                <div
                  className="rs-looped rs-wave"
                  data-speed={20}
                  data-angle={0}
                  data-radius="50px"
                  data-origin="50% 50%"
                >
                  <img
                    src={images + "blurflake3.png"}
                    alt=""
                    data-ww="['170px','170px','170px','170px']"
                    data-hh="['170px','170px','170px','170px']"
                    data-no-retina
                  />{" "}
                </div>
              </div>
              {/* LAYER NR. 13 */}
              <div
                className="tp-caption   tp-resizeme rs-parallaxlevel-4"
                id="slide-141-layer-12"
                data-x="['left','left','left','left']"
                data-hoffset="['719','719','719','719']"
                data-y="['top','top','top','top']"
                data-voffset="['200','200','200','200']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="image"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 12 }}
              >
                <div
                  className="rs-looped rs-rotate"
                  data-easing="Power2.easeInOut"
                  data-startdeg={-20}
                  data-enddeg={360}
                  data-speed={20}
                  data-origin="50% 50%"
                >
                  <img
                    src={images + "blurflake2.png"}
                    alt=""
                    data-ww="['50px','50px','50px','50px']"
                    data-hh="['51px','51px','51px','51px']"
                    data-no-retina
                  />{" "}
                </div>
              </div>
              {/* LAYER NR. 14 */}
              <div
                className="tp-caption   tp-resizeme rs-parallaxlevel-6"
                id="slide-141-layer-13"
                data-x="['left','left','left','left']"
                data-hoffset="['187','187','187','187']"
                data-y="['top','top','top','top']"
                data-voffset="['216','216','216','216']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="image"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 13 }}
              >
                <div
                  className="rs-looped rs-wave"
                  data-speed={4}
                  data-angle={0}
                  data-radius={10}
                  data-origin="50% 50%"
                >
                  <img
                    src={images + "blurflake1.png"}
                    alt=""
                    data-ww="['120px','120px','120px','120px']"
                    data-hh="['120px','120px','120px','120px']"
                    data-no-retina
                  />{" "}
                </div>
              </div>
            </li>
            {/* SLIDE  */}
            <li
              data-index="rs-142"
              data-transition="zoomin"
              data-slotamount={7}
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed={2000}
              data-thumb="rev-slider-files/assets/100x50_notgeneric_bg2.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title="Enjoy Nature"
              data-param1
              data-param2
              data-param3
              data-param4
              data-param5
              data-param6
              data-param7
              data-param8
              data-param9
              data-param10
              data-description
            >
              {/* MAIN IMAGE */}
              <img
                src={images + "notgeneric_bg2.jpg"}
                alt=""
                data-bgposition="center center"
                data-kenburns="on"
                data-duration={30000}
                data-ease="Linear.easeNone"
                data-scalestart={100}
                data-scaleend={120}
                data-rotatestart={0}
                data-rotateend={0}
                data-blurstart={0}
                data-blurend={0}
                data-offsetstart="0 0"
                data-offsetend="0 0"
                data-bgparallax={10}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 15 */}
              <div
                className="tp-caption NotGeneric-Title   tp-resizeme"
                id="slide-142-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['1','0','0','0']"
                data-fontsize="['50','48','36','28']"
                data-lineheight="['46','48','36','28']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"split":"chars","split_direction":"forward","splitdelay":0.05,"speed":2000,"frame":"0","from":"y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                  lineHeight: "46px",
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                }}
              >
                GREAT ADVENTURES{" "}
              </div>
              {/* LAYER NR. 16 */}
              <div
                className="tp-caption NotGeneric-SubTitle   tp-resizeme"
                id="slide-142-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['52','52','52','51']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                TOURS HOTELS RESTAURANTS
              </div>
              {/* LAYER NR. 17 */}
              <div
                className="tp-caption NotGeneric-Icon   tp-resizeme"
                id="slide-142-layer-8"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-68','-68','-68','-68']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 7, whiteSpace: "nowrap", cursor: "default" }}
              >
                <i className="pe-7s-expand1" />{" "}
              </div>
              {/* LAYER NR. 18 */}
              <div
                className="tp-caption NotGeneric-Button rev-btn "
                id="slide-142-layer-7"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['124','124','124','123']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1);bc:rgba(255, 255, 255, 1);bw:1 1 1 1;"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[30,30,30,30]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[30,30,30,30]"
                style={{
                  zIndex: 8,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  borderColor: "rgba(255,255,255,0.50)",
                  borderWidth: "1px 1px 1px 1px",
                  outline: "none",
                  boxShadow: "none",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                NEXT GOODIE{" "}
              </div>
              {/* LAYER NR. 19 */}
              <div
                className="tp-caption rev-scroll-btn "
                id="slide-142-layer-9"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['bottom','bottom','bottom','bottom']"
                data-voffset="['50','50','50','50']"
                data-width={35}
                data-height={55}
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-type="button"
                data-actions='[{"event":"click","action":"scrollbelow","offset":"0px","delay":"","speed":"300","ease":"Linear.easeNone"}]'
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:50px;opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 9,
                  minWidth: "35px",
                  maxWidth: "55px",
                  whiteSpace: "nowrap",
                  fontWeight: 100,
                  color: "transparent",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 1px",
                  borderRadius: "23px 23px 23px 23px",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <span />
              </div>
            </li>
            {/* SLIDE  */}
            <li
              data-index="rs-143"
              data-transition="zoomout"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed={2000}
              data-thumb="rev-slider-files/assets/100x50_iceberg.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title="Iceberg"
              data-param1
              data-param2
              data-param3
              data-param4
              data-param5
              data-param6
              data-param7
              data-param8
              data-param9
              data-param10
              data-description
            >
              {/* MAIN IMAGE */}
              <img
                src={images + "iceberg.jpg"}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgparallax={10}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* BACKGROUND VIDEO LAYER */}
              <div
                className="rs-background-video-layer"
                data-forcerewind="on"
                data-volume="mute"
                data-videowidth="100%"
                data-videoheight="100%"
                data-videomp4="rev-slider-files/assets/iceberg.mp4"
                data-videopreload="auto"
                data-videoloop="loopandnoslidestop"
                data-forcecover={1}
                data-aspectratio="16:9"
                data-autoplay="true"
                data-autoplayonlyfirsttime="false"
              />
              {/* LAYER NR. 20 */}
              <div
                className="tp-caption tp-shape tp-shapewrapper  "
                id="slide-143-layer-10"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-width="full"
                data-height="full"
                data-whitespace="nowrap"
                data-type="shape"
                data-basealign="slide"
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 5, backgroundColor: "rgba(0, 0, 0, 0.25)" }}
              >
                {" "}
              </div>
              {/* LAYER NR. 21 */}
              <div
                className="tp-caption NotGeneric-Title   tp-resizeme"
                id="slide-143-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['50','48','36','28']"
                data-lineheight="['48','48','36','28']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"split":"chars","split_direction":"forward","splitdelay":0.05,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                  lineHeight: "48px",
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                }}
              >
                ADVENTURE TOURS{" "}
              </div>
              {/* LAYER NR. 22 */}
              <div
                className="tp-caption NotGeneric-SubTitle   tp-resizeme"
                id="slide-143-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['52','52','52','51']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 7,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                TOURS HOTELS RESTAURANTS
              </div>
              {/* LAYER NR. 23 */}
              <div
                className="tp-caption NotGeneric-Icon   tp-resizeme"
                id="slide-143-layer-8"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-68','-68','-68','-68']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 8, whiteSpace: "nowrap", cursor: "default" }}
              >
                <i className="pe-7s-anchor" />{" "}
              </div>
              {/* LAYER NR. 24 */}
              <div
                className="tp-caption NotGeneric-Button rev-btn "
                id="slide-143-layer-7"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['124','124','124','123']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1);bc:rgba(255, 255, 255, 1);bw:1 1 1 1;"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[30,30,30,30]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[30,30,30,30]"
                style={{
                  zIndex: 9,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  borderColor: "rgba(255,255,255,0.50)",
                  borderWidth: "1px 1px 1px 1px",
                  outline: "none",
                  boxShadow: "none",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                NEXT GOODIE{" "}
              </div>
              {/* LAYER NR. 25 */}
              <div
                className="tp-caption rev-scroll-btn "
                id="slide-143-layer-9"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['bottom','bottom','bottom','bottom']"
                data-voffset="['50','50','50','50']"
                data-width={35}
                data-height={55}
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-type="button"
                data-actions='[{"event":"click","action":"scrollbelow","offset":"0px","delay":"","speed":"300","ease":"Linear.easeNone"}]'
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:50px;opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  minWidth: "35px",
                  maxWidth: "55px",
                  whiteSpace: "nowrap",
                  fontWeight: 100,
                  color: "transparent",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 1px",
                  borderRadius: "23px 23px 23px 23px",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <span />
              </div>
            </li>
            {/* SLIDE  */}
            <li
              data-index="rs-144"
              data-transition="zoomin"
              data-slotamount={7}
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed={2000}
              data-thumb="rev-slider-files/assets/100x50_notgeneric_bg3.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title="Hiking"
              data-param1
              data-param2
              data-param3
              data-param4
              data-param5
              data-param6
              data-param7
              data-param8
              data-param9
              data-param10
              data-description
            >
              {/* MAIN IMAGE */}
              <img
                src={images + "notgeneric_bg3.jpg"}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax={10}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 26 */}
              <div
                className="tp-caption NotGeneric-Title   tp-resizeme"
                id="slide-144-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['50','48','36','28']"
                data-lineheight="['48','48','36','28']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1000,"split":"chars","split_direction":"forward","splitdelay":0.1,"speed":2000,"frame":"0","from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                  lineHeight: "48px",
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                }}
              >
                WANT THIS TOO?{" "}
              </div>
              {/* LAYER NR. 27 */}
              <div
                className="tp-caption NotGeneric-SubTitle   tp-resizeme"
                id="slide-144-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['52','52','52','51']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                GET TravisTravels TODAY{" "}
              </div>
              {/* LAYER NR. 28 */}
              <div
                className="tp-caption NotGeneric-Icon   tp-resizeme"
                id="slide-144-layer-8"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-68','-68','-68','-68']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 7, whiteSpace: "nowrap", cursor: "default" }}
              >
                <i className="pe-7s-diamond" />{" "}
              </div>
              {/* LAYER NR. 29 */}
              <div
                className="tp-caption rev-scroll-btn "
                id="slide-144-layer-9"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['bottom','bottom','bottom','bottom']"
                data-voffset="['50','50','50','50']"
                data-width={35}
                data-height={55}
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-type="button"
                data-actions='[{"event":"click","action":"scrollbelow","offset":"0px","delay":"","speed":"300","ease":"Linear.easeNone"}]'
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:50px;opacity:0;","ease":"nothing"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 8,
                  minWidth: "35px",
                  maxWidth: "55px",
                  whiteSpace: "nowrap",
                  fontWeight: 100,
                  color: "transparent",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 1px",
                  borderRadius: "23px 23px 23px 23px",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <span />
              </div>
              {/* LAYER NR. 30 */}
              <a
                className="tp-caption NotGeneric-Button rev-btn "
                href="https://themeforest.net/item/TravisTravels-city-tours-tour-tickets-and-guides/10715647?ref=ansonika"
                target="_blank"
                id="slide-144-layer-10"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['124','125','124','104']"
                data-fontweight="['400','500','500','500']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-actions
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":2000,"speed":300,"frame":"0","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","ease":"nothing"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1);bc:rgba(255, 255, 255, 1);bw:1 1 1 1;"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[30,30,30,30]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[30,30,30,30]"
                style={{
                  zIndex: 9,
                  whiteSpace: "nowrap",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  borderColor: "rgba(255,255,255,0.50)",
                  borderWidth: "1px 1px 1px 1px",
                  outline: "none",
                  boxShadow: "none",
                  boxSizing: "border-box",
                  MozBoxSizing: "border-box",
                  WebkitBoxSizing: "border-box",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                BUY ON ENVATO{" "}
              </a>
            </li>
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          />
        </div>
      </div>
    </main>
  );
};

export default RevSlider;
