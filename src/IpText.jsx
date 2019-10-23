import React from 'react';

const ipText = () => (
    <div>
      <div id="content" className="mw-body" role="main">
        <a id="top"></a>
        <div id="siteNotice" className="mw-body-content"></div>
        <h1 id="firstHeading" className="firstHeading" lang="en">
          IP address
        </h1>

        <div id="bodyContent" className="mw-body-content">
          <div id="siteSub" className="noprint">
            From Wikipedia, the free encyclopedia
          </div>
          <div id="contentSub"></div>

          <div id="jump-to-nav"></div>
          <a className="mw-jump-link" href="#mw-head">
            Jump to navigation
          </a>
          <a className="mw-jump-link" href="#p-search">
            Jump to search
          </a>
          <div
            id="mw-content-text"
            lang="en"
            dir="ltr"
            className="mw-content-ltr"
          >
            <div className="mw-parser-output">
              <div role="note" className="hatnote navigation-not-searchable">
                <div className="plainlinks selfreference noprint">
                  For the Wikipedia user access level, see{" "}
                  <a
                    href="/wiki/Wikipedia:User_access_levels#Unregistered_(IP_or_not_logged_in)_users"
                    title="Wikipedia:User access levels"
                  >
                    Wikipedia:User access levels#Unregistered (IP or not logged
                    in) users
                  </a>
                  .
                </div>
              </div>
              <p className="mw-empty-elt"></p>
              <div className="shortdescription nomobile noexcerpt noprint searchaux">
                Numerical label used to identify a network interface in an IP
                network
              </div>
              <p className="mw-empty-elt"></p>
              <p>
                An <b>Internet Protocol address</b> (<b>IP address</b>) is a
                numerical label assigned to each device connected to a{" "}
                <a href="/wiki/Computer_network" title="Computer network">
                  computer network
                </a>{" "}
                that uses the{" "}
                <a href="/wiki/Internet_Protocol" title="Internet Protocol">
                  Internet Protocol
                </a>{" "}
                for communication.
                <sup id="cite_ref-rfc760_1-0" className="reference">
                  <a href="#cite_note-rfc760-1">&#91;1&#93;</a>
                </sup>
                <sup id="cite_ref-rfc791_2-0" className="reference">
                  <a href="#cite_note-rfc791-2">&#91;2&#93;</a>
                </sup>
                An IP address serves two main functions: host or network
                interface{" "}
                <a
                  href="/wiki/Identification_(information)"
                  title="Identification (information)"
                >
                  identification
                </a>{" "}
                and location{" "}
                <a href="/wiki/Network_address" title="Network address">
                  addressing
                </a>
                .
              </p>
              <p>
                <a href="/wiki/IPv4" title="IPv4">
                  Internet Protocol version 4
                </a>{" "}
                (IPv4) defines an IP address as a{" "}
                <a href="/wiki/32-bit" title="32-bit">
                  32-bit
                </a>{" "}
                number.
                <sup id="cite_ref-rfc791_2-1" className="reference">
                  <a href="#cite_note-rfc791-2">&#91;2&#93;</a>
                </sup>{" "}
                However, because of the growth of the Internet and the{" "}
                <a
                  href="/wiki/IPv4_address_exhaustion"
                  title="IPv4 address exhaustion"
                >
                  depletion of available IPv4 addresses
                </a>
                , a new version of IP (
                <a href="/wiki/IPv6" title="IPv6">
                  IPv6
                </a>
                ), using 128 bits for the IP address, was standardized in 1998.
                <sup id="cite_ref-rfc1883_3-0" className="reference">
                  <a href="#cite_note-rfc1883-3">&#91;3&#93;</a>
                </sup>
                <sup id="cite_ref-rfc2460_4-0" className="reference">
                  <a href="#cite_note-rfc2460-4">&#91;4&#93;</a>
                </sup>
                <sup id="cite_ref-rfc8200_5-0" className="reference">
                  <a href="#cite_note-rfc8200-5">&#91;5&#93;</a>
                </sup>{" "}
                <a href="/wiki/IPv6_deployment" title="IPv6 deployment">
                  IPv6 deployment
                </a>{" "}
                has been ongoing since the mid-2000s.
              </p>
              <p>
                IP addresses are written and displayed in{" "}
                <a
                  href="/wiki/Human-readable"
                  className="mw-redirect"
                  title="Human-readable"
                >
                  human-readable
                </a>{" "}
                notations, such as{" "}
                <i>
                  <span className="ipaddr">
                    <span>172.16.254.1</span>
                  </span>
                </i>{" "}
                in IPv4, and{" "}
                <i>
                  <span className="ipaddr">
                    <span>2001:db8:0:1234:0:567:8:1</span>
                  </span>
                </i>{" "}
                in IPv6. The size of the routing prefix of the address is
                designated in{" "}
                <a
                  href="/wiki/CIDR_notation"
                  className="mw-redirect"
                  title="CIDR notation"
                >
                  CIDR notation
                </a>{" "}
                by suffixing the address with the number of significant bits,
                e.g.,{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.168.1.15</span>
                    <span>/</span>
                    <span>24</span>
                  </span>
                </i>
                , which is equivalent to the historically used subnet mask{" "}
                <i>
                  <span className="ipaddr">
                    <span>255.255.255.0</span>
                  </span>
                </i>
                .
              </p>
              <p>
                The IP address space is managed globally by the{" "}
                <a
                  href="/wiki/Internet_Assigned_Numbers_Authority"
                  title="Internet Assigned Numbers Authority"
                >
                  Internet Assigned Numbers Authority
                </a>{" "}
                (IANA), and by five{" "}
                <a
                  href="/wiki/Regional_Internet_registry"
                  title="Regional Internet registry"
                >
                  regional Internet registries
                </a>{" "}
                (RIRs) responsible in their designated territories for
                assignment to{" "}
                <a
                  href="/wiki/Local_Internet_registry"
                  className="mw-redirect"
                  title="Local Internet registry"
                >
                  local Internet registries
                </a>
                , such as{" "}
                <a
                  href="/wiki/Internet_service_providers"
                  className="mw-redirect"
                  title="Internet service providers"
                >
                  Internet service providers
                </a>
                , and other end users. IPv4 addresses were distributed by IANA
                to the RIRs in blocks of approximately 16.8&#160;million
                addresses each, but have been exhausted at the IANA level since
                2011. Only one of the RIRs still has a supply for local
                assignments in Africa.
                <sup id="cite_ref-6" className="reference">
                  <a href="#cite_note-6">&#91;6&#93;</a>
                </sup>
              </p>
              <p>
                Network administrators assign an IP address to each device
                connected to a network. Such assignments may be on a{" "}
                <i>static</i> (fixed or permanent) or <i>dynamic</i> basis,
                depending on network practices and software features.
              </p>
              <div id="toc" className="toc">
                <input
                  type="checkbox"
                  role="button"
                  id="toctogglecheckbox"
                  className="toctogglecheckbox"
                />
                <div className="toctitle" lang="en" dir="ltr">
                  <h2>Contents</h2>
                  <span className="toctogglespan">
                    <label
                      className="toctogglelabel"
                      htmlFor="toctogglecheckbox"
                    ></label>
                  </span>
                </div>
                <ul>
                  <li className="toclevel-1 tocsection-1">
                    <a href="#Function">
                      <span className="tocnumber">1</span>{" "}
                      <span className="toctext">Function</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-2">
                    <a href="#IP_versions">
                      <span className="tocnumber">2</span>{" "}
                      <span className="toctext">IP versions</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-3">
                    <a href="#Subnetworks">
                      <span className="tocnumber">3</span>{" "}
                      <span className="toctext">Subnetworks</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-4">
                    <a href="#IPv4_addresses">
                      <span className="tocnumber">4</span>{" "}
                      <span className="toctext">IPv4 addresses</span>
                    </a>
                    <ul>
                      <li className="toclevel-2 tocsection-5">
                        <a href="#Subnetting_history">
                          <span className="tocnumber">4.1</span>{" "}
                          <span className="toctext">Subnetting history</span>
                        </a>
                      </li>
                      <li className="toclevel-2 tocsection-6">
                        <a href="#Private_addresses">
                          <span className="tocnumber">4.2</span>{" "}
                          <span className="toctext">Private addresses</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="toclevel-1 tocsection-7">
                    <a href="#IPv6_addresses">
                      <span className="tocnumber">5</span>{" "}
                      <span className="toctext">IPv6 addresses</span>
                    </a>
                    <ul>
                      <li className="toclevel-2 tocsection-8">
                        <a href="#Private_addresses_2">
                          <span className="tocnumber">5.1</span>{" "}
                          <span className="toctext">Private addresses</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="toclevel-1 tocsection-9">
                    <a href="#IP_address_assignment">
                      <span className="tocnumber">6</span>{" "}
                      <span className="toctext">IP address assignment</span>
                    </a>
                    <ul>
                      <li className="toclevel-2 tocsection-10">
                        <a href="#Sticky_dynamic_IP_address">
                          <span className="tocnumber">6.1</span>{" "}
                          <span className="toctext">
                            Sticky dynamic IP address
                          </span>
                        </a>
                      </li>
                      <li className="toclevel-2 tocsection-11">
                        <a href="#Address_autoconfiguration">
                          <span className="tocnumber">6.2</span>{" "}
                          <span className="toctext">
                            Address autoconfiguration
                          </span>
                        </a>
                      </li>
                      <li className="toclevel-2 tocsection-12">
                        <a href="#Addressing_conflicts">
                          <span className="tocnumber">6.3</span>{" "}
                          <span className="toctext">Addressing conflicts</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="toclevel-1 tocsection-13">
                    <a href="#Routing">
                      <span className="tocnumber">7</span>{" "}
                      <span className="toctext">Routing</span>
                    </a>
                    <ul>
                      <li className="toclevel-2 tocsection-14">
                        <a href="#Unicast_addressing">
                          <span className="tocnumber">7.1</span>{" "}
                          <span className="toctext">Unicast addressing</span>
                        </a>
                      </li>
                      <li className="toclevel-2 tocsection-15">
                        <a href="#Broadcast_addressing">
                          <span className="tocnumber">7.2</span>{" "}
                          <span className="toctext">Broadcast addressing</span>
                        </a>
                      </li>
                      <li className="toclevel-2 tocsection-16">
                        <a href="#Multicast_addressing">
                          <span className="tocnumber">7.3</span>{" "}
                          <span className="toctext">Multicast addressing</span>
                        </a>
                      </li>
                      <li className="toclevel-2 tocsection-17">
                        <a href="#Anycast_addressing">
                          <span className="tocnumber">7.4</span>{" "}
                          <span className="toctext">Anycast addressing</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="toclevel-1 tocsection-18">
                    <a href="#Geolocation">
                      <span className="tocnumber">8</span>{" "}
                      <span className="toctext">Geolocation</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-19">
                    <a href="#Public_address">
                      <span className="tocnumber">9</span>{" "}
                      <span className="toctext">
                        <span>Public address</span>
                      </span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-20">
                    <a href="#Firewalling">
                      <span className="tocnumber">10</span>{" "}
                      <span className="toctext">Firewalling</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-21">
                    <a href="#Address_translation">
                      <span className="tocnumber">11</span>{" "}
                      <span className="toctext">Address translation</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-22">
                    <a href="#Diagnostic_tools">
                      <span className="tocnumber">12</span>{" "}
                      <span className="toctext">Diagnostic tools</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-23">
                    <a href="#See_also">
                      <span className="tocnumber">13</span>{" "}
                      <span className="toctext">See also</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-24">
                    <a href="#References">
                      <span className="tocnumber">14</span>{" "}
                      <span className="toctext">References</span>
                    </a>
                  </li>
                  <li className="toclevel-1 tocsection-25">
                    <a href="#External_links">
                      <span className="tocnumber">15</span>{" "}
                      <span className="toctext">External links</span>
                    </a>
                  </li>
                </ul>
              </div>

              <h2>
                <span className="mw-headline" id="Function">
                  Function
                </span>
              </h2>
              <p>
                An IP address serves two principal functions. It{" "}
                <a
                  href="/wiki/Identification_(information)"
                  title="Identification (information)"
                >
                  identifies
                </a>{" "}
                the host, or more specifically its network interface, and it
                provides the location of the host in the network, and thus the
                capability of establishing a path to that host. Its role has
                been characterized as follows: "A name indicates what we seek.
                An address indicates where it is. A route indicates how to get
                there."
                <sup id="cite_ref-rfc791_2-2" className="reference">
                  <a href="#cite_note-rfc791-2">&#91;2&#93;</a>
                </sup>
                The{" "}
                <a href="/wiki/Header_(computing)" title="Header (computing)">
                  header
                </a>{" "}
                of each{" "}
                <a href="/wiki/Network_packet" title="Network packet">
                  IP packet
                </a>{" "}
                contains the IP address of the sending host, and that of the
                destination host.
              </p>
              <h2>
                <span className="mw-headline" id="IP_versions">
                  IP versions
                </span>
              </h2>
              <p>
                Two{" "}
                <a
                  href="/wiki/Internet_Protocol#Version_history"
                  title="Internet Protocol"
                >
                  versions of the Internet Protocol
                </a>{" "}
                are in common use in the Internet today. The original version of
                the Internet Protocol that was first deployed in 1983 in the{" "}
                <a href="/wiki/ARPANET" title="ARPANET">
                  ARPANET
                </a>
                , the predecessor of the Internet, is{" "}
                <a href="/wiki/IPv4" title="IPv4">
                  Internet Protocol version 4
                </a>{" "}
                (IPv4).
              </p>
              <p>
                The rapid{" "}
                <a
                  href="/wiki/IPv4_address_exhaustion"
                  title="IPv4 address exhaustion"
                >
                  exhaustion of IPv4 address space
                </a>{" "}
                available for assignment to{" "}
                <a
                  href="/wiki/Internet_service_providers"
                  className="mw-redirect"
                  title="Internet service providers"
                >
                  Internet service providers
                </a>{" "}
                and end user organizations by the early 1990s, prompted the{" "}
                <a
                  href="/wiki/Internet_Engineering_Task_Force"
                  title="Internet Engineering Task Force"
                >
                  Internet Engineering Task Force
                </a>{" "}
                (IETF) to explore new technologies to expand the addressing
                capability in the Internet. The result was a redesign of the
                Internet Protocol which became eventually known as{" "}
                <a href="/wiki/IPv6" title="IPv6">
                  Internet Protocol Version 6
                </a>{" "}
                (IPv6) in 1995.
                <sup id="cite_ref-rfc1883_3-1" className="reference">
                  <a href="#cite_note-rfc1883-3">&#91;3&#93;</a>
                </sup>
                <sup id="cite_ref-rfc2460_4-1" className="reference">
                  <a href="#cite_note-rfc2460-4">&#91;4&#93;</a>
                </sup>
                <sup id="cite_ref-rfc8200_5-1" className="reference">
                  <a href="#cite_note-rfc8200-5">&#91;5&#93;</a>
                </sup>
                IPv6 technology was in various testing stages until the
                mid-2000s, when commercial production deployment commenced.
              </p>
              <p>
                Today, these two versions of the Internet Protocol are in
                simultaneous use. Among other technical changes, each version
                defines the format of addresses differently. Because of the
                historical prevalence of IPv4, the generic term{" "}
                <i>IP address</i> typically still refers to the addresses
                defined by IPv4. The gap in version sequence between IPv4 and
                IPv6 resulted from the assignment of version 5 to the
                experimental{" "}
                <a
                  href="/wiki/Internet_Stream_Protocol"
                  title="Internet Stream Protocol"
                >
                  Internet Stream Protocol
                </a>{" "}
                in 1979, which however was never referred to as IPv5.
              </p>
              <h2>
                <span className="mw-headline" id="Subnetworks">
                  Subnetworks
                </span>
              </h2>
              <p>
                IP networks may be divided into{" "}
                <a href="/wiki/Subnetwork" title="Subnetwork">
                  subnetworks
                </a>{" "}
                in both{" "}
                <a
                  href="/wiki/IPv4_subnetting_reference"
                  className="mw-redirect"
                  title="IPv4 subnetting reference"
                >
                  IPv4
                </a>{" "}
                and{" "}
                <a
                  href="/wiki/IPv6_subnetting_reference"
                  className="mw-redirect"
                  title="IPv6 subnetting reference"
                >
                  IPv6
                </a>
                . For this purpose, an IP address is recognized as consisting of
                two parts: the <i>network prefix</i> in the high-order bits and
                the remaining bits called the <i>rest field</i>,{" "}
                <i>host identifier</i>, or <i>interface identifier</i> (IPv6),
                used for host numbering within a network.
                <sup id="cite_ref-rfc760_1-1" className="reference">
                  <a href="#cite_note-rfc760-1">&#91;1&#93;</a>
                </sup>{" "}
                The{" "}
                <a
                  href="/wiki/Subnet_mask"
                  className="mw-redirect"
                  title="Subnet mask"
                >
                  subnet mask
                </a>{" "}
                or CIDR notation determines how the IP address is divided into
                network and host parts.
              </p>
              <p>
                The term <i>subnet mask</i> is only used within IPv4. Both IP
                versions however use the CIDR concept and notation. In this, the
                IP address is followed by a slash and the number (in decimal) of
                bits used for the network part, also called the{" "}
                <i>routing prefix</i>. For example, an IPv4 address and its
                subnet mask may be{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.0.2.1</span>
                  </span>
                </i>{" "}
                and{" "}
                <i>
                  <span className="ipaddr">
                    <span>255.255.255.0</span>
                  </span>
                </i>
                , respectively. The CIDR notation for the same IP address and
                subnet is{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.0.2.1</span>
                    <span>/</span>
                    <span>24</span>
                  </span>
                </i>
                , because the first 24 bits of the IP address indicate the
                network and subnet.
              </p>
              <h2>
                <span className="mw-headline" id="IPv4_addresses">
                  IPv4 addresses
                </span>
              </h2>
              <div role="note" className="hatnote navigation-not-searchable">
                Main article:{" "}
                <a href="/wiki/IPv4#Addressing" title="IPv4">
                  IPv4 §&#160;Addressing
                </a>
              </div>
              <div className="thumb tright">
                <div className="thumbinner">
                  <a href="/wiki/File:Ipv4_address.svg" className="image">
                    <img
                      alt=""
                      src="//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ipv4_address.svg/300px-Ipv4_address.svg.png"
                      decoding="async"
                      width="300"
                      height="180"
                      className="thumbimage"
                      srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ipv4_address.svg/450px-Ipv4_address.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ipv4_address.svg/600px-Ipv4_address.svg.png 2x"
                      data-file-width="750"
                      data-file-height="450"
                    />
                  </a>{" "}
                  <div className="thumbcaption">
                    <div className="magnify">
                      <a
                        href="/wiki/File:Ipv4_address.svg"
                        className="internal"
                        title="Enlarge"
                      ></a>
                    </div>
                    Decomposition of an IPv4 address from{" "}
                    <a
                      href="/wiki/Dot-decimal_notation"
                      title="Dot-decimal notation"
                    >
                      dot-decimal notation
                    </a>{" "}
                    to its binary value.
                  </div>
                </div>
              </div>
              <p>
                An IPv4 address has a size of 32 bits, which limits the{" "}
                <a href="/wiki/Address_space" title="Address space">
                  address space
                </a>{" "}
                to{" "}
                <span>
                  4<span>294</span>
                  <span>967</span>
                  <span>296</span>
                </span>{" "}
                (2<sup>32</sup>) addresses. Of this number, some addresses are
                reserved for special purposes such as{" "}
                <a href="/wiki/Private_network" title="Private network">
                  private networks
                </a>{" "}
                (~18 million addresses) and{" "}
                <a href="/wiki/Multicast_address" title="Multicast address">
                  multicast addressing
                </a>{" "}
                (~270 million addresses).
              </p>
              <p>
                IPv4 addresses are usually represented in{" "}
                <a
                  href="/wiki/Dot-decimal_notation"
                  title="Dot-decimal notation"
                >
                  dot-decimal notation
                </a>
                , consisting of four decimal numbers, each ranging from 0 to
                255, separated by dots, e.g.,{" "}
                <i>
                  <span className="ipaddr">
                    <span>172.16.254.1</span>
                  </span>
                </i>
                . Each part represents a group of 8 bits (an{" "}
                <a href="/wiki/Octet_(computing)" title="Octet (computing)">
                  octet
                </a>
                ) of the address. In some cases of technical writing,
                <sup className="noprint Inline-Template">
                  &#91;
                  <i>
                    <a
                      href="/wiki/Wikipedia:Citing_sources"
                      title="Wikipedia:Citing sources"
                    >
                      <span title="Statement needs to be more specific about the content to which it refers. (May 2018)">
                        specify
                      </span>
                    </a>
                  </i>
                  &#93;
                </sup>{" "}
                IPv4 addresses may be presented in various{" "}
                <a href="/wiki/Hexadecimal" title="Hexadecimal">
                  hexadecimal
                </a>
                ,{" "}
                <a href="/wiki/Octal" title="Octal">
                  octal
                </a>
                , or{" "}
                <a
                  href="/wiki/Binary_numeral_system"
                  className="mw-redirect"
                  title="Binary numeral system"
                >
                  binary
                </a>{" "}
                representations.
              </p>
              <h3>
                <span className="mw-headline" id="Subnetting_history">
                  Subnetting history
                </span>
              </h3>
              <p>
                In the early stages of development of the Internet Protocol, the
                network number was always the highest order octet (most
                significant eight bits). Because this method allowed for only
                256 networks, it soon proved inadequate as additional networks
                developed that were independent of the existing networks already
                designated by a network number. In 1981, the addressing
                specification was revised with the introduction of{" "}
                <a href="/wiki/Classful_network" title="Classful network">
                  classful network
                </a>{" "}
                architecture.
                <sup id="cite_ref-rfc791_2-3" className="reference">
                  <a href="#cite_note-rfc791-2">&#91;2&#93;</a>
                </sup>
              </p>
              <p>
                Classful network design allowed for a larger number of
                individual network assignments and fine-grained{" "}
                <a href="/wiki/Subnetwork" title="Subnetwork">
                  subnetwork
                </a>{" "}
                design. The first three bits of the most significant octet of an
                IP address were defined as the <i>class</i> of the address.
                Three classes (<i>A</i>, <i>B</i>, and <i>C</i>) were defined
                for universal{" "}
                <a href="/wiki/Unicast" title="Unicast">
                  unicast
                </a>{" "}
                addressing. Depending on the class derived, the network
                identification was based on octet boundary segments of the
                entire address. Each class used successively additional octets
                in the network identifier, thus reducing the possible number of
                hosts in the higher order classes (<i>B</i> and <i>C</i>). The
                following table gives an overview of this now obsolete system.
              </p>
              <table className="wikitable">
                <caption>Historical classful network architecture</caption>
                <tbody>
                  <tr>
                    <th>Class</th>
                    <th>
                      Leading <br />
                      bits
                    </th>
                    <th>
                      Size of{" "}
                      <i>
                        network <br />
                        number
                      </i>{" "}
                      bit field
                    </th>
                    <th>
                      Size of <i>rest</i>
                      <br />
                      bit field
                    </th>
                    <th>
                      Number
                      <br />
                      of networks
                    </th>
                    <th>
                      Number of addresses
                      <br />
                      per network
                    </th>
                    <th>Start address</th>
                    <th>End address</th>
                  </tr>
                  <tr>
                    <th>A</th>
                    <td>0</td>
                    <td>8</td>
                    <td>24</td>
                    <td>
                      128 (2<sup>7</sup>)
                    </td>
                    <td>
                      <span>
                        16<span>777</span>
                        <span>216</span>
                      </span>{" "}
                      (2<sup>24</sup>)
                    </td>
                    <td>0.0.0.0</td>
                    <td>127.255.255.255</td>
                  </tr>
                  <tr>
                    <th>B</th>
                    <td>10</td>
                    <td>16</td>
                    <td>16</td>
                    <td>
                      <span>
                        16<span>384</span>
                      </span>{" "}
                      (2<sup>14</sup>)
                    </td>
                    <td>
                      <span>
                        65<span>536</span>
                      </span>{" "}
                      (2<sup>16</sup>)
                    </td>
                    <td>128.0.0.0</td>
                    <td>191.255.255.255</td>
                  </tr>
                  <tr>
                    <th>C</th>
                    <td>110</td>
                    <td>24</td>
                    <td>8</td>
                    <td>
                      <span>
                        2<span>097</span>
                        <span>152</span>
                      </span>{" "}
                      (2<sup>21</sup>)
                    </td>
                    <td>
                      256 (2<sup>8</sup>)
                    </td>
                    <td>192.0.0.0</td>
                    <td>223.255.255.255</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Classful network design served its purpose in the startup stage
                of the Internet, but it lacked{" "}
                <a href="/wiki/Scalability" title="Scalability">
                  scalability
                </a>{" "}
                in the face of the rapid expansion of networking in the 1990s.
                The class system of the address space was replaced with{" "}
                <a
                  href="/wiki/Classless_Inter-Domain_Routing"
                  title="Classless Inter-Domain Routing"
                >
                  Classless Inter-Domain Routing
                </a>{" "}
                (CIDR) in 1993. CIDR is based on variable-length subnet masking
                (VLSM) to allow allocation and routing based on arbitrary-length
                prefixes. Today, remnants of classful network concepts function
                only in a limited scope as the default configuration parameters
                of some network software and hardware components (e.g. netmask),
                and in the technical jargon used in network administrators'
                discussions.
              </p>
              <h3>
                <span className="mw-headline" id="Private_addresses">
                  Private addresses
                </span>
              </h3>
              <p>
                Early network design, when global end-to-end connectivity was
                envisioned for communications with all Internet hosts, intended
                that IP addresses be globally unique. However, it was found that
                this was not always necessary as{" "}
                <a href="/wiki/Private_network" title="Private network">
                  private networks
                </a>{" "}
                developed and public address space needed to be conserved.
              </p>
              <p>
                Computers not connected to the Internet, such as factory
                machines that communicate only with each other via TCP/IP, need
                not have globally unique IP addresses. Today, such private
                networks are widely used and typically connect to the Internet
                with{" "}
                <a
                  href="/wiki/Network_address_translation"
                  title="Network address translation"
                >
                  network address translation
                </a>{" "}
                (NAT), when needed.
              </p>
              <p>
                Three non-overlapping ranges of IPv4 addresses for private
                networks are reserved.
                <sup id="cite_ref-rfc1918_7-0" className="reference">
                  <a href="#cite_note-rfc1918-7">&#91;7&#93;</a>
                </sup>{" "}
                These addresses are not routed on the Internet and thus their
                use need not be coordinated with an IP address registry. Any
                user may use any of the reserved blocks. Typically, a network
                administrator will divide a block into{" "}
                <a href="/wiki/Subnetwork" title="Subnetwork">
                  subnets
                </a>
                ; for example, many{" "}
                <a href="/wiki/Residential_gateway" title="Residential gateway">
                  home routers
                </a>{" "}
                automatically use a default address range of{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.168.0.0</span>
                  </span>
                </i>{" "}
                through{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.168.0.255</span>
                  </span>
                </i>{" "}
                (
                <i>
                  <span className="ipaddr">
                    <span>192.168.0.0</span>
                    <span>/</span>
                    <span>24</span>
                  </span>
                </i>
                ).
              </p>
              <dl>
                <dd>
                  <table className="wikitable">
                    <caption>
                      Reserved private IPv4 network ranges
                      <sup id="cite_ref-rfc1918_7-1" className="reference">
                        <a href="#cite_note-rfc1918-7">&#91;7&#93;</a>
                      </sup>
                    </caption>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>
                          <a
                            href="/wiki/Classless_Inter-Domain_Routing"
                            title="Classless Inter-Domain Routing"
                          >
                            CIDR
                          </a>{" "}
                          block
                        </th>
                        <th>Address range</th>
                        <th>Number of addresses</th>
                        <th>
                          <i>
                            <a
                              href="/wiki/Classful_network"
                              title="Classful network"
                            >
                              Classful
                            </a>
                          </i>{" "}
                          description
                        </th>
                      </tr>
                      <tr>
                        <td>24-bit block</td>
                        <td>10.0.0.0/8</td>
                        <td>10.0.0.0 – 10.255.255.255</td>
                        <td align="right">
                          <span className="nowrap">
                            <span data-sort-value="7007167772160000000♠"></span>
                            16<span>777</span>
                            <span>216</span>
                          </span>
                        </td>
                        <td>Single Class A.</td>
                      </tr>
                      <tr>
                        <td>20-bit block</td>
                        <td>172.16.0.0/12</td>
                        <td>172.16.0.0 – 172.31.255.255</td>
                        <td align="right">
                          <span className="nowrap">
                            <span data-sort-value="7006104857600000000♠"></span>
                            1<span>048</span>
                            <span>576</span>
                          </span>
                        </td>
                        <td>Contiguous range of 16 Class B blocks.</td>
                      </tr>
                      <tr>
                        <td>16-bit block</td>
                        <td>192.168.0.0/16</td>
                        <td>192.168.0.0 – 192.168.255.255</td>
                        <td align="right">
                          <span className="nowrap">
                            <span data-sort-value="7004655360000000000♠"></span>
                            65<span>536</span>
                          </span>
                        </td>
                        <td>Contiguous range of 256 Class C blocks.</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </dl>
              <h2>
                <span className="mw-headline" id="IPv6_addresses">
                  IPv6 addresses
                </span>
              </h2>
              <div role="note" className="hatnote navigation-not-searchable">
                Main article:{" "}
                <a href="/wiki/IPv6_address" title="IPv6 address">
                  IPv6 address
                </a>
              </div>
              <div className="thumb tright">
                <div className="thumbinner">
                  <a href="/wiki/File:Ipv6_address.svg" className="image">
                    <img
                      alt=""
                      src="//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ipv6_address.svg/300px-Ipv6_address.svg.png"
                      decoding="async"
                      width="300"
                      height="180"
                      className="thumbimage"
                      srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ipv6_address.svg/450px-Ipv6_address.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ipv6_address.svg/600px-Ipv6_address.svg.png 2x"
                      data-file-width="750"
                      data-file-height="450"
                    />
                  </a>{" "}
                  <div className="thumbcaption">
                    <div className="magnify">
                      <a
                        href="/wiki/File:Ipv6_address.svg"
                        className="internal"
                        title="Enlarge"
                      ></a>
                    </div>
                    Decomposition of an IPv6 address from{" "}
                    <a href="/wiki/Hexadecimal" title="Hexadecimal">
                      hexadecimal
                    </a>{" "}
                    representation to its binary value.
                  </div>
                </div>
              </div>
              <p>
                In IPv6, the address size was increased from 32 bits in IPv4 to
                128 bits, thus providing up to 2<sup>128</sup> (approximately{" "}
                <span className="nowrap">
                  <span data-sort-value="7038340299999999999♠"></span>3.403
                  <span>×</span>
                  10<sup>38</sup>
                </span>
                ) addresses. This is deemed sufficient for the foreseeable
                future.
              </p>
              <p>
                The intent of the new design was not to provide just a
                sufficient quantity of addresses, but also redesign routing in
                the Internet by allowing more efficient aggregation of
                subnetwork routing prefixes. This resulted in slower growth of{" "}
                <a href="/wiki/Routing_table" title="Routing table">
                  routing tables
                </a>{" "}
                in routers. The smallest possible individual allocation is a
                subnet for 2<sup>64</sup> hosts, which is the square of the size
                of the entire IPv4 Internet. At these levels, actual address
                utilization ratios will be small on any IPv6 network segment.
                The new design also provides the opportunity to separate the
                addressing infrastructure of a network segment, i.e. the local
                administration of the segment's available space, from the
                addressing prefix used to route traffic to and from external
                networks. IPv6 has facilities that automatically change the
                routing prefix of entire networks, should the global
                connectivity or the routing policy change, without requiring
                internal redesign or manual renumbering.
              </p>
              <p>
                The large number of IPv6 addresses allows large blocks to be
                assigned for specific purposes and, where appropriate, to be
                aggregated for efficient routing. With a large address space,
                there is no need to have complex address conservation methods as
                used in CIDR.
              </p>
              <p>
                All modern desktop and enterprise server operating systems
                include native support for the IPv6 protocol, but it is not yet
                widely deployed in other devices, such as residential networking
                routers,{" "}
                <a href="/wiki/Voice_over_IP" title="Voice over IP">
                  voice over IP
                </a>{" "}
                (VoIP) and multimedia equipment, and some{" "}
                <a href="/wiki/Networking_hardware" title="Networking hardware">
                  networking hardware
                </a>
                .
              </p>
              <h3>
                <span className="mw-headline" id="Private_addresses_2">
                  Private addresses
                </span>
              </h3>
              <p>
                Just as IPv4 reserves addresses for private networks, blocks of
                addresses are set aside in IPv6. In IPv6, these are referred to
                as{" "}
                <a
                  href="/wiki/Unique_local_address"
                  title="Unique local address"
                >
                  unique local addresses
                </a>{" "}
                (ULAs). The routing prefix{" "}
                <i>
                  <span className="ipaddr">
                    <span>fc00::</span>
                    <span>/</span>
                    <span>7</span>
                  </span>
                </i>{" "}
                is reserved for this block,
                <sup id="cite_ref-rfc4193_8-0" className="reference">
                  <a href="#cite_note-rfc4193-8">&#91;8&#93;</a>
                </sup>{" "}
                which is divided into two{" "}
                <i>
                  <span className="ipaddr">
                    <span>/</span>
                    <span>8</span>
                  </span>
                </i>{" "}
                blocks with different implied policies. The addresses include a
                40-bit{" "}
                <a href="/wiki/Pseudorandomness" title="Pseudorandomness">
                  pseudorandom
                </a>{" "}
                number that minimizes the risk of address collisions if sites
                merge or packets are misrouted.
              </p>
              <p>
                Early practices used a different block for this purpose (
                <i>
                  <span className="ipaddr">
                    <span>fec0::</span>
                  </span>
                </i>
                ), dubbed site-local addresses.
                <sup id="cite_ref-rfc3513_9-0" className="reference">
                  <a href="#cite_note-rfc3513-9">&#91;9&#93;</a>
                </sup>{" "}
                However, the definition of what constituted a <i>site</i>{" "}
                remained unclear and the poorly defined addressing policy
                created ambiguities for routing. This address type was abandoned
                and must not be used in new systems.
                <sup id="cite_ref-rfc3879_10-0" className="reference">
                  <a href="#cite_note-rfc3879-10">&#91;10&#93;</a>
                </sup>
              </p>
              <p>
                Addresses starting with{" "}
                <i>
                  <span className="ipaddr">
                    <span>fe80::</span>
                  </span>
                </i>
                , called{" "}
                <a href="/wiki/Link-local_address" title="Link-local address">
                  link-local addresses
                </a>
                , are assigned to interfaces for communication on the attached
                link. The addresses are automatically generated by the operating
                system for each network interface. This provides instant and
                automatic communication between all IPv6 host on a link. This
                feature is used in the lower layers of IPv6 network
                administration, such as for the{" "}
                <a
                  href="/wiki/Neighbor_Discovery_Protocol"
                  title="Neighbor Discovery Protocol"
                >
                  Neighbor Discovery Protocol
                </a>
                .
              </p>
              <p>
                Private and link-local address prefixes may not be routed on the
                public Internet.
              </p>
              <h2>
                <span className="mw-headline" id="IP_address_assignment">
                  IP address assignment <span id="Dynamic_IP"></span>
                  <span id="Static_IP"></span>
                </span>
              </h2>
              <p>
                IP addresses are assigned to a host either dynamically as they
                join the network, or persistently by configuration of the host
                hardware or software. Persistent configuration is also known as
                using a <b>static IP address</b>. In contrast, when a computer's
                IP address is assigned each time it restarts, this is known as
                using a <b>dynamic IP address</b>.
              </p>
              <p>
                Dynamic IP addresses are assigned by network using{" "}
                <a
                  href="/wiki/Dynamic_Host_Configuration_Protocol"
                  title="Dynamic Host Configuration Protocol"
                >
                  Dynamic Host Configuration Protocol
                </a>{" "}
                (DHCP). DHCP is the most frequently used technology for
                assigning addresses. It avoids the administrative burden of
                assigning specific static addresses to each device on a network.
                It also allows devices to share the limited address space on a
                network if only some of them are online at a particular time.
                Typically, dynamic IP configuration is enabled by default in
                modern desktop operating systems.
              </p>
              <p>
                The address assigned with DHCP is associated with a <i>lease</i>{" "}
                and usually has an expiration period. If the lease is not
                renewed by the host before expiry, the address may be assigned
                to another device. Some DHCP implementations attempt to reassign
                the same IP address to a host (based on its MAC address) each
                time it joins the network. A network administrator may configure
                DHCP by allocating specific IP addresses based on MAC address.
              </p>
              <p>
                DHCP is not the only technology used to assign IP addresses
                dynamically.{" "}
                <a href="/wiki/Bootstrap_Protocol" title="Bootstrap Protocol">
                  Bootstrap Protocol
                </a>{" "}
                is a similar protocol and predecessor to DHCP. Dialup and some
                broadband networks use dynamic address features of the{" "}
                <a
                  href="/wiki/Point-to-Point_Protocol"
                  title="Point-to-Point Protocol"
                >
                  Point-to-Point Protocol
                </a>
                .
              </p>
              <p>
                Computers and equipment used for the network infrastructure,
                such as routers and mail servers, are typically configured with
                static addressing.
              </p>
              <p>
                In the absence or failure of static or dynamic address
                configurations, an operating system may assign a{" "}
                <a href="/wiki/Link-local_address" title="Link-local address">
                  link-local address
                </a>{" "}
                to a host using stateless address autoconfiguration.
              </p>
              <h3>
                <span className="mw-headline" id="Sticky_dynamic_IP_address">
                  Sticky dynamic IP address{" "}
                  <span id="Sticky_dynamic_IP_address"></span>
                </span>
              </h3>
              <p>
                A <i>sticky dynamic IP address</i> is an informal term used by
                cable and DSL Internet access subscribers to describe a
                dynamically assigned IP address which seldom changes. The
                addresses are usually assigned with DHCP. Since the modems are
                usually powered on for extended periods of time, the address
                leases are usually set to long periods and simply renewed. If a
                modem is turned off and powered up again before the next
                expiration of the address lease, it often receives the same IP
                address.
              </p>
              <h3>
                <span className="mw-headline" id="Address_autoconfiguration">
                  Address autoconfiguration
                </span>
              </h3>
              <p>
                Address block{" "}
                <i>
                  <span className="ipaddr">
                    <span>169.254.0.0</span>
                    <span>/</span>
                    <span>16</span>
                  </span>
                </i>{" "}
                is defined for the special use in link-local addressing for IPv4
                networks.
                <sup id="cite_ref-rfc6890_11-0" className="reference">
                  <a href="#cite_note-rfc6890-11">&#91;11&#93;</a>
                </sup>{" "}
                In IPv6, every interface, whether using static or dynamic
                address assignments, also receives a link-local address
                automatically in the block{" "}
                <i>
                  <span className="ipaddr">
                    <span>fe80::</span>
                    <span>/</span>
                    <span>10</span>
                  </span>
                </i>
                .
                <sup id="cite_ref-rfc6890_11-1" className="reference">
                  <a href="#cite_note-rfc6890-11">&#91;11&#93;</a>
                </sup>{" "}
                These addresses are only valid on the link, such as a local
                network segment or point-to-point connection, to which a host is
                connected. These addresses are not routable and, like private
                addresses, cannot be the source or destination of packets
                traversing the Internet.
              </p>
              <p>
                When the link-local IPv4 address block was reserved, no
                standards existed for mechanisms of address autoconfiguration.
                Filling the void,{" "}
                <a href="/wiki/Microsoft" title="Microsoft">
                  Microsoft
                </a>{" "}
                developed a protocol called{" "}
                <a
                  href="/wiki/Automatic_Private_IP_Addressing"
                  className="mw-redirect"
                  title="Automatic Private IP Addressing"
                >
                  Automatic Private IP Addressing
                </a>{" "}
                (APIPA), whose first public implementation appeared in{" "}
                <a href="/wiki/Windows_98" title="Windows 98">
                  Windows 98
                </a>
                .
                <sup id="cite_ref-12" className="reference">
                  <a href="#cite_note-12">&#91;12&#93;</a>
                </sup>{" "}
                APIPA has been deployed on millions of machines and became a{" "}
                <a href="/wiki/De_facto_standard" title="De facto standard">
                  de facto standard
                </a>{" "}
                in the industry. In May 2005, the{" "}
                <a href="/wiki/IETF" className="mw-redirect" title="IETF">
                  IETF
                </a>{" "}
                defined a formal standard for it.
                <sup id="cite_ref-rfc3927_13-0" className="reference">
                  <a href="#cite_note-rfc3927-13">&#91;13&#93;</a>
                </sup>
              </p>
              <h3>
                <span className="mw-headline" id="Addressing_conflicts">
                  Addressing conflicts
                </span>
              </h3>
              <p>
                An IP address conflict occurs when two devices on the same local
                physical or wireless network claim to have the same IP address.
                A second assignment of an address generally stops the IP
                functionality of one or both of the devices. Many modern{" "}
                <a href="/wiki/Operating_system" title="Operating system">
                  operating systems
                </a>{" "}
                notify the administrator of IP address conflicts.
                <sup id="cite_ref-14" className="reference">
                  <a href="#cite_note-14">&#91;14&#93;</a>
                </sup>
                <sup id="cite_ref-15" className="reference">
                  <a href="#cite_note-15">&#91;15&#93;</a>
                </sup>{" "}
                When IP addresses are assigned by multiple people and systems
                with differing methods, any of them may be at fault.
                <sup id="cite_ref-16" className="reference">
                  <a href="#cite_note-16">&#91;16&#93;</a>
                </sup>
                <sup id="cite_ref-17" className="reference">
                  <a href="#cite_note-17">&#91;17&#93;</a>
                </sup>
                <sup id="cite_ref-18" className="reference">
                  <a href="#cite_note-18">&#91;18&#93;</a>
                </sup>
                <sup id="cite_ref-19" className="reference">
                  <a href="#cite_note-19">&#91;19&#93;</a>
                </sup>
                <sup id="cite_ref-20" className="reference">
                  <a href="#cite_note-20">&#91;20&#93;</a>
                </sup>{" "}
                If one of the devices involved in the conflict is the{" "}
                <a href="/wiki/Default_gateway" title="Default gateway">
                  default gateway
                </a>{" "}
                access beyond the LAN for all devices on the LAN may be
                impaired.
              </p>
              <h2>
                <span className="mw-headline" id="Routing">
                  Routing
                </span>
              </h2>
              <p>
                IP addresses are classified into several classes of operational
                characteristics: unicast, multicast, anycast and broadcast
                addressing.
              </p>
              <h3>
                <span className="mw-headline" id="Unicast_addressing">
                  Unicast addressing
                </span>
              </h3>
              <p>
                The most common concept of an IP address is in{" "}
                <a href="/wiki/Unicast" title="Unicast">
                  unicast
                </a>{" "}
                addressing, available in both IPv4 and IPv6. It normally refers
                to a single sender or a single receiver, and can be used for
                both sending and receiving. Usually, a unicast address is
                associated with a single device or host, but a device or host
                may have more than one unicast address. Sending the same data to
                multiple unicast addresses requires the sender to send all the
                data many times over, once for each recipient.
              </p>
              <h3>
                <span className="mw-headline" id="Broadcast_addressing">
                  Broadcast addressing
                </span>
              </h3>
              <p>
                <a
                  href="/wiki/Broadcasting_(computing)"
                  className="mw-redirect"
                  title="Broadcasting (computing)"
                >
                  Broadcasting
                </a>{" "}
                is an addressing technique available in IPv4 to address data to
                all possible destinations on a network in one transmission
                operation as an <i>all-hosts broadcast</i>. All receivers
                capture the network packet. The address{" "}
                <i>
                  <span className="ipaddr">
                    <span>255.255.255.255</span>
                  </span>
                </i>{" "}
                is used for network broadcast. In addition, a more limited
                directed broadcast uses the all-ones host address with the
                network prefix. For example, the destination address used for
                directed broadcast to devices on the network{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.0.2.0</span>
                    <span>/</span>
                    <span>24</span>
                  </span>
                </i>{" "}
                is{" "}
                <i>
                  <span className="ipaddr">
                    <span>192.0.2.255</span>
                  </span>
                </i>
                .
              </p>
              <p>
                IPv6 does not implement broadcast addressing, and replaces it
                with multicast to the specially defined all-nodes multicast
                address.
              </p>
              <h3>
                <span className="mw-headline" id="Multicast_addressing">
                  Multicast addressing
                </span>
              </h3>
              <p>
                A{" "}
                <a href="/wiki/Multicast_address" title="Multicast address">
                  multicast address
                </a>{" "}
                is associated with a group of interested receivers. In IPv4,
                addresses{" "}
                <i>
                  <span className="ipaddr">
                    <span>224.0.0.0</span>
                  </span>
                </i>{" "}
                through{" "}
                <i>
                  <span className="ipaddr">
                    <span>239.255.255.255</span>
                  </span>
                </i>{" "}
                (the former{" "}
                <a href="/wiki/Classful_network" title="Classful network">
                  Class D
                </a>{" "}
                addresses) are designated as multicast addresses.
                <sup id="cite_ref-rfc5771_21-0" className="reference">
                  <a href="#cite_note-rfc5771-21">&#91;21&#93;</a>
                </sup>{" "}
                IPv6 uses the address block with the prefix{" "}
                <i>
                  <span className="ipaddr">
                    <span>ff00::</span>
                    <span>/</span>
                    <span>8</span>
                  </span>
                </i>{" "}
                for multicast. In either case, the sender sends a single
                datagram from its unicast address to the multicast group address
                and the intermediary routers take care of making copies and
                sending them to all interested receivers (those that have joined
                the corresponding multicast group).
              </p>
              <h3>
                <span className="mw-headline" id="Anycast_addressing">
                  Anycast addressing
                </span>
              </h3>
              <p>
                Like broadcast and multicast,{" "}
                <a href="/wiki/Anycast" title="Anycast">
                  anycast
                </a>{" "}
                is a one-to-many routing topology. However, the data stream is
                not transmitted to all receivers, just the one which the router
                decides is logically closest in the network. Anycast address is
                an inherent feature of only IPv6. In IPv4, anycast addressing
                implementations typically operate using the shortest-path metric
                of{" "}
                <a
                  href="/wiki/Border_Gateway_Protocol"
                  title="Border Gateway Protocol"
                >
                  BGP routing
                </a>{" "}
                and do not take into account congestion or other attributes of
                the path. Anycast methods are useful for global load balancing
                and are commonly used in distributed{" "}
                <a
                  href="/wiki/Domain_name_system"
                  className="mw-redirect"
                  title="Domain name system"
                >
                  DNS
                </a>{" "}
                systems.
              </p>
              <h2>
                <span className="mw-headline" id="Geolocation">
                  Geolocation
                </span>
              </h2>
              <p>
                A host may use{" "}
                <a
                  href="/wiki/Geolocation_software"
                  title="Geolocation software"
                >
                  geolocation software
                </a>{" "}
                to deduce the{" "}
                <a href="/wiki/Geolocation" title="Geolocation">
                  geolocation
                </a>{" "}
                of its communicating peer.
                <sup id="cite_ref-22" className="reference">
                  <a href="#cite_note-22">&#91;22&#93;</a>
                </sup>
                <sup id="cite_ref-23" className="reference">
                  <a href="#cite_note-23">&#91;23&#93;</a>
                </sup>
              </p>
              <h2>
                <span className="mw-headline" id="Public_address">
                  <span id="Public_address">Public address</span>
                </span>
              </h2>
              <h2>
                <span className="mw-headline" id="Firewalling">
                  Firewalling
                </span>
              </h2>
              <p>
                For security and privacy considerations, network administrators
                often desire to restrict public Internet traffic within their
                private networks. The source and destination IP addresses
                contained in the headers of each IP packet are a convenient
                means to discriminate traffic by{" "}
                <a href="/wiki/IP_address_blocking" title="IP address blocking">
                  IP address blocking
                </a>{" "}
                or by selectively tailoring responses to external requests to
                internal servers. This is achieved with{" "}
                <a
                  href="/wiki/Firewall_(computer)"
                  className="mw-redirect"
                  title="Firewall (computer)"
                >
                  firewall
                </a>{" "}
                software running on the network's gateway router. A database of
                IP addresses of permissible traffic may be maintained in{" "}
                <a
                  href="/wiki/Blacklist_(computing)"
                  title="Blacklist (computing)"
                >
                  blacklists
                </a>{" "}
                or{" "}
                <a
                  href="/wiki/Whitelist"
                  className="mw-redirect"
                  title="Whitelist"
                >
                  whitelists
                </a>
                .
              </p>
              <h2>
                <span className="mw-headline" id="Address_translation">
                  Address translation
                </span>
              </h2>
              <p>
                Multiple client devices can appear to{" "}
                <span id="shared_IP"></span>share an IP address, either because
                they are part of a{" "}
                <a
                  href="/wiki/Shared_hosting"
                  className="mw-redirect"
                  title="Shared hosting"
                >
                  shared hosting
                </a>{" "}
                <a href="/wiki/Web_server" title="Web server">
                  web server
                </a>{" "}
                environment or because an IPv4{" "}
                <a
                  href="/wiki/Network_address_translator"
                  className="mw-redirect"
                  title="Network address translator"
                >
                  network address translator
                </a>{" "}
                (NAT) or{" "}
                <a href="/wiki/Proxy_server" title="Proxy server">
                  proxy server
                </a>{" "}
                acts as an{" "}
                <a href="/wiki/Intermediary" title="Intermediary">
                  intermediary
                </a>{" "}
                agent on behalf of the client, in which case the real
                originating IP address might be masked from the server receiving
                a request. A common practice is to have a NAT mask many devices
                in a{" "}
                <a href="/wiki/Private_network" title="Private network">
                  private network
                </a>
                . Only the "outside" interface(s) of the NAT needs to have an
                Internet-routable address.
                <sup id="cite_ref-24" className="reference">
                  <a href="#cite_note-24">&#91;24&#93;</a>
                </sup>
              </p>
              <p>
                Commonly, the NAT device maps TCP or UDP{" "}
                <a
                  href="/wiki/Port_number"
                  className="mw-redirect"
                  title="Port number"
                >
                  port numbers
                </a>{" "}
                on the side of the larger, public network to individual private
                addresses on the masqueraded network.
              </p>
              <p>
                In residential networks, NAT functions are usually implemented
                in a{" "}
                <a href="/wiki/Residential_gateway" title="Residential gateway">
                  residential gateway
                </a>
                . In this scenario, the computers connected to the router have
                private IP addresses and the router has a public address on its
                external interface to communicate on the Internet. The internal
                computers appear to share one public IP address.
              </p>
              <h2>
                <span className="mw-headline" id="Diagnostic_tools">
                  Diagnostic tools
                </span>
              </h2>
              <p>
                Computer operating systems provide various diagnostic tools to
                examine network interfaces and address configuration.{" "}
                <a href="/wiki/Microsoft_Windows" title="Microsoft Windows">
                  Microsoft Windows
                </a>{" "}
                provides the{" "}
                <a
                  href="/wiki/Command-line_interface"
                  title="Command-line interface"
                >
                  command-line interface
                </a>{" "}
                tools{" "}
                <a href="/wiki/Ipconfig" title="Ipconfig">
                  ipconfig
                </a>{" "}
                and{" "}
                <a href="/wiki/Netsh" title="Netsh">
                  netsh
                </a>{" "}
                and users of{" "}
                <a href="/wiki/Unix-like" title="Unix-like">
                  Unix-like
                </a>{" "}
                systems may use{" "}
                <a href="/wiki/Ifconfig" title="Ifconfig">
                  ifconfig
                </a>
                ,{" "}
                <a href="/wiki/Netstat" title="Netstat">
                  netstat
                </a>
                ,{" "}
                <a href="/wiki/Route_(command)" title="Route (command)">
                  route
                </a>
                , lanstat,{" "}
                <a
                  href="/wiki/Fstat_(Unix)"
                  className="mw-redirect"
                  title="Fstat (Unix)"
                >
                  fstat
                </a>
                , and{" "}
                <a href="/wiki/Iproute2" title="Iproute2">
                  iproute2
                </a>{" "}
                utilities to accomplish the task.
              </p>
              <h2>
                <span className="mw-headline" id="See_also">
                  See also
                </span>
              </h2>
              <div
                role="navigation"
                aria-label="Portals"
                className="noprint portal plainlist tright"
              >
                <ul>
                  <li>
                    <span>
                      <a
                        href="/wiki/File:Crystal_Clear_app_linneighborhood.svg"
                        className="image"
                      >
                        <img
                          alt="icon"
                          src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Crystal_Clear_app_linneighborhood.svg/28px-Crystal_Clear_app_linneighborhood.svg.png"
                          decoding="async"
                          width="28"
                          height="28"
                          className="noviewer"
                          srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Crystal_Clear_app_linneighborhood.svg/42px-Crystal_Clear_app_linneighborhood.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Crystal_Clear_app_linneighborhood.svg/56px-Crystal_Clear_app_linneighborhood.svg.png 2x"
                          data-file-width="407"
                          data-file-height="407"
                        />
                      </a>
                    </span>
                    <span>
                      <a href="/wiki/Portal:Internet" title="Portal:Internet">
                        Internet portal
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a
                        href="/wiki/File:Octicons-terminal.svg"
                        className="image"
                      >
                        <img
                          alt="icon"
                          src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Octicons-terminal.svg/24px-Octicons-terminal.svg.png"
                          decoding="async"
                          width="24"
                          height="28"
                          className="noviewer"
                          srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Octicons-terminal.svg/37px-Octicons-terminal.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Octicons-terminal.svg/49px-Octicons-terminal.svg.png 2x"
                          data-file-width="896"
                          data-file-height="1024"
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        href="/wiki/Portal:Computer_programming"
                        title="Portal:Computer programming"
                      >
                        Computer programming portal
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="div-col columns column-width">
                <ul>
                  <li>
                    <a
                      href="/wiki/Classless_Inter-Domain_Routing"
                      title="Classless Inter-Domain Routing"
                    >
                      Classless Inter-Domain Routing
                    </a>
                  </li>
                  <li>
                    <a href="/wiki/Hostname" title="Hostname">
                      Hostname
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wiki/IP_address_spoofing"
                      title="IP address spoofing"
                    >
                      IP address spoofing
                    </a>
                  </li>
                  <li>
                    <a href="/wiki/IP_aliasing" title="IP aliasing">
                      IP aliasing
                    </a>
                  </li>
                  <li>
                    <a href="/wiki/IP_multicast" title="IP multicast">
                      IP multicast
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wiki/List_of_assigned_/8_IPv4_address_blocks"
                      title="List of assigned /8 IPv4 address blocks"
                    >
                      List of assigned /8 IPv4 address blocks
                    </a>
                  </li>
                  <li>
                    <a href="/wiki/MAC_address" title="MAC address">
                      MAC address
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wiki/Regional_Internet_registry"
                      title="Regional Internet registry"
                    >
                      Regional Internet registry
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wiki/Reverse_DNS_lookup"
                      title="Reverse DNS lookup"
                    >
                      Reverse DNS lookup
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wiki/Virtual_IP_address"
                      title="Virtual IP address"
                    >
                      Virtual IP address
                    </a>
                  </li>
                  <li>
                    <a href="/wiki/WHOIS" title="WHOIS">
                      WHOIS
                    </a>
                  </li>
                </ul>
              </div>
              <h2>
                <span className="mw-headline" id="References">
                  References
                </span>
              </h2>
              <div className="reflist">
                <div className="mw-references-wrap mw-references-columns">
                  <ol className="references">
                    <li id="cite_note-rfc760-1">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc760_1-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc760_1-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <a
                          className="external mw-magiclink-rfc"
                          rel="nofollow"
                          href="https://tools.ietf.org/html/rfc760"
                        >
                          RFC 760
                        </a>
                        , <i>DOD Standard Internet Protocol</i>, DARPA,
                        Information Sciences Institute (January 1980).
                      </span>
                    </li>
                    <li id="cite_note-rfc791-2">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc791_2-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc791_2-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc791_2-2">
                          <sup>
                            <i>
                              <b>c</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc791_2-3">
                          <sup>
                            <i>
                              <b>d</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          <a href="/wiki/Jon_Postel" title="Jon Postel">
                            J. Postel
                          </a>
                          , ed. (September 1981).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc791"
                          >
                            <i>
                              Internet Protocol, DARPA Internet Program Protocol
                              Specification
                            </i>
                          </a>
                          .{" "}
                          <a
                            href="/wiki/IETF"
                            className="mw-redirect"
                            title="IETF"
                          >
                            IETF
                          </a>
                          .{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC0791"
                            >
                              10.17487/RFC0791
                            </a>
                          </span>
                          . RFC 791.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Internet+Protocol%2C+DARPA+Internet+Program+Protocol+Specification&amp;rft.pub=IETF&amp;rft.date=1981-09&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC0791&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc791&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        Updated by{" "}
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                        <a
                          href="/wiki/Request_for_Comments_(identifier)"
                          className="mw-redirect"
                          title="Request for Comments (identifier)"
                        >
                          RFC
                        </a>
                        &#160;
                        <a
                          rel="nofollow"
                          className="external text"
                          href="https://tools.ietf.org/html/rfc1349"
                        >
                          1349
                        </a>
                        ,{" "}
                        <a
                          rel="nofollow"
                          className="external text"
                          href="https://tools.ietf.org/html/rfc2474"
                        >
                          2474
                        </a>
                        ,{" "}
                        <a
                          rel="nofollow"
                          className="external text"
                          href="https://tools.ietf.org/html/rfc6864"
                        >
                          6864
                        </a>
                        .
                      </span>
                    </li>
                    <li id="cite_note-rfc1883-3">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc1883_3-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc1883_3-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          <a href="/wiki/Steve_Deering" title="Steve Deering">
                            S. Deering
                          </a>
                          ; R. Hinden (December 1995).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc1883"
                          >
                            <i>
                              Internet Protocol, Version 6 (IPv6) Specification
                            </i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC1883"
                            >
                              10.17487/RFC1883
                            </a>
                          </span>
                          . RFC 1883.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Internet+Protocol%2C+Version+6+%28IPv6%29+Specification&amp;rft.pub=Network+Working+Group&amp;rft.date=1995-12&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC1883&amp;rft.au=S.+Deering&amp;rft.au=R.+Hinden&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc1883&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc2460-4">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc2460_4-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc2460_4-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          <a href="/wiki/Steve_Deering" title="Steve Deering">
                            S. Deering
                          </a>
                          ; R. Hinden (December 1998).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc2460"
                          >
                            <i>
                              Internet Protocol, Version 6 (IPv6) Specification
                            </i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC2460"
                            >
                              10.17487/RFC2460
                            </a>
                          </span>
                          . RFC 2460.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Internet+Protocol%2C+Version+6+%28IPv6%29+Specification&amp;rft.pub=Network+Working+Group&amp;rft.date=1998-12&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC2460&amp;rft.au=S.+Deering&amp;rft.au=R.+Hinden&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc2460&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc8200-5">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc8200_5-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc8200_5-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          <a href="/wiki/Steve_Deering" title="Steve Deering">
                            S. Deering
                          </a>
                          ; R. Hinden (July 2017).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc8200"
                          >
                            <i>
                              Internet Protocol, Version 6 (IPv6) Specification
                            </i>
                          </a>
                          .{" "}
                          <a
                            href="/wiki/IETF"
                            className="mw-redirect"
                            title="IETF"
                          >
                            IETF
                          </a>
                          .{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC8200"
                            >
                              10.17487/RFC8200
                            </a>
                          </span>
                          . RFC 8200.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Internet+Protocol%2C+Version+6+%28IPv6%29+Specification&amp;rft.pub=IETF&amp;rft.date=2017-07&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC8200&amp;rft.au=S.+Deering&amp;rft.au=R.+Hinden&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc8200&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-6">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-6">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://ipv4.potaroo.net/"
                          >
                            "IPv4 Address Report"
                          </a>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=IPv4+Address+Report&amp;rft_id=https%3A%2F%2Fipv4.potaroo.net%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc1918-7">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc1918_7-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc1918_7-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          Y. Rekhter; B. Moskowitz; D. Karrenberg; G. J. de
                          Groot; E. Lear (February 1996).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc1918"
                          >
                            <i>Address Allocation for Private Internets</i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC1918"
                            >
                              10.17487/RFC1918
                            </a>
                          </span>
                          . BCP 5.&#32;RFC 1918.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Address+Allocation+for+Private+Internets&amp;rft.pub=Network+Working+Group&amp;rft.date=1996-02&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC1918&amp;rft.au=Y.+Rekhter&amp;rft.au=B.+Moskowitz&amp;rft.au=D.+Karrenberg&amp;rft.au=G.+J.+de+Groot&amp;rft.au=E.+Lear&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc1918&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        Updated by{" "}
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                        <a
                          href="/wiki/Request_for_Comments_(identifier)"
                          className="mw-redirect"
                          title="Request for Comments (identifier)"
                        >
                          RFC
                        </a>
                        &#160;
                        <a
                          rel="nofollow"
                          className="external text"
                          href="https://tools.ietf.org/html/rfc6761"
                        >
                          6761
                        </a>
                        .
                      </span>
                    </li>
                    <li id="cite_note-rfc4193-8">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-rfc4193_8-0">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          R. Hinden; B. Haberman (October 2005).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc4193"
                          >
                            <i>Unique Local IPv6 Unicast Addresses</i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC4193"
                            >
                              10.17487/RFC4193
                            </a>
                          </span>
                          . RFC 4193.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Unique+Local+IPv6+Unicast+Addresses&amp;rft.pub=Network+Working+Group&amp;rft.date=2005-10&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC4193&amp;rft.au=R.+Hinden&amp;rft.au=B.+Haberman&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc4193&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc3513-9">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-rfc3513_9-0">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          R. Hinden;{" "}
                          <a href="/wiki/Steve_Deering" title="Steve Deering">
                            S. Deering
                          </a>{" "}
                          (April 2003).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc3513"
                          >
                            <i>
                              Internet Protocol Version 6 (IPv6) Addressing
                              Architecture
                            </i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC3513"
                            >
                              10.17487/RFC3513
                            </a>
                          </span>
                          . RFC 3513.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Internet+Protocol+Version+6+%28IPv6%29+Addressing+Architecture&amp;rft.pub=Network+Working+Group&amp;rft.date=2003-04&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC3513&amp;rft.au=R.+Hinden&amp;rft.au=S.+Deering&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc3513&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        Obsoleted by{" "}
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                        <a
                          href="/wiki/Request_for_Comments_(identifier)"
                          className="mw-redirect"
                          title="Request for Comments (identifier)"
                        >
                          RFC
                        </a>
                        &#160;
                        <a
                          rel="nofollow"
                          className="external text"
                          href="https://tools.ietf.org/html/rfc4291"
                        >
                          4291
                        </a>
                        .
                      </span>
                    </li>
                    <li id="cite_note-rfc3879-10">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-rfc3879_10-0">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          C. Huitema; B. Carpenter (September 2004).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc3879"
                          >
                            <i>Deprecating Site Local Addresses</i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC3879"
                            >
                              10.17487/RFC3879
                            </a>
                          </span>
                          . RFC 3879.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Deprecating+Site+Local+Addresses&amp;rft.pub=Network+Working+Group&amp;rft.date=2004-09&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC3879&amp;rft.au=C.+Huitema&amp;rft.au=B.+Carpenter&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc3879&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc6890-11">
                      <span className="mw-cite-backlink">
                        ^{" "}
                        <a href="#cite_ref-rfc6890_11-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{" "}
                        <a href="#cite_ref-rfc6890_11-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          M. Cotton; L. Vegoda; R. Bonica; B. Haberman (April
                          2013).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc6890"
                          >
                            <i>Special-Purpose IP Address Registries</i>
                          </a>
                          .{" "}
                          <a
                            href="/wiki/Internet_Engineering_Task_Force"
                            title="Internet Engineering Task Force"
                          >
                            Internet Engineering Task Force
                          </a>
                          .{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC6890"
                            >
                              10.17487/RFC6890
                            </a>
                          </span>
                          . BCP 153.&#32;RFC 6890.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Special-Purpose+IP+Address+Registries&amp;rft.pub=Internet+Engineering+Task+Force&amp;rft.date=2013-04&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC6890&amp;rft.au=M.+Cotton&amp;rft.au=L.+Vegoda&amp;rft.au=R.+Bonica&amp;rft.au=B.+Haberman&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc6890&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        Updated by{" "}
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                        <a
                          href="/wiki/Request_for_Comments_(identifier)"
                          className="mw-redirect"
                          title="Request for Comments (identifier)"
                        >
                          RFC
                        </a>
                        &#160;
                        <a
                          rel="nofollow"
                          className="external text"
                          href="https://tools.ietf.org/html/rfc8190"
                        >
                          8190
                        </a>
                        .
                      </span>
                    </li>
                    <li id="cite_note-12">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-12">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc958957(v%3dtechnet.10)"
                          >
                            "DHCP and Automatic Private IP Addressing"
                          </a>
                          . <i>docs.microsoft.com</i>
                          <span className="reference-accessdate">
                            . Retrieved <span className="nowrap">20 May</span>{" "}
                            2019
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=docs.microsoft.com&amp;rft.atitle=DHCP+and+Automatic+Private+IP+Addressing&amp;rft_id=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fprevious-versions%2Fwindows%2Fit-pro%2Fwindows-2000-server%2Fcc958957%28v%253dtechnet.10%29&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc3927-13">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-rfc3927_13-0">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          S. Cheshire; B. Aboba; E. Guttman (May 2005).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc3927"
                          >
                            <i>
                              Dynamic Configuration of IPv4 Link-Local Addresses
                            </i>
                          </a>
                          . Network Working Group.{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC3927"
                            >
                              10.17487/RFC3927
                            </a>
                          </span>
                          . RFC 3927.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Dynamic+Configuration+of+IPv4+Link-Local+Addresses&amp;rft.pub=Network+Working+Group&amp;rft.date=2005-05&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC3927&amp;rft.au=S.+Cheshire&amp;rft.au=B.+Aboba&amp;rft.au=E.+Guttman&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc3927&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-14">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-14">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://technet.microsoft.com/en-us/library/dd379838(v=ws.10).aspx"
                          >
                            "Event ID 4198 — TCP/IP Network Interface
                            Configuration"
                          </a>
                          .{" "}
                          <a href="/wiki/Microsoft" title="Microsoft">
                            Microsoft
                          </a>
                          . 7 January 2009.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20131224215139/http://technet.microsoft.com/en-us/library/dd379838(v=ws.10).aspx"
                          >
                            Archived
                          </a>{" "}
                          from the original on 24 December 2013
                          <span className="reference-accessdate">
                            . Retrieved <span className="nowrap">2 June</span>{" "}
                            2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Event+ID+4198+%E2%80%94+TCP%2FIP+Network+Interface+Configuration&amp;rft.pub=Microsoft&amp;rft.date=2009-01-07&amp;rft_id=https%3A%2F%2Ftechnet.microsoft.com%2Fen-us%2Flibrary%2Fdd379838%28v%3Dws.10%29.aspx&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        "Updated: January 7, 2009"
                      </span>
                    </li>
                    <li id="cite_note-15">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-15">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://technet.microsoft.com/en-us/library/dd379922(v=ws.10).aspx"
                          >
                            "Event ID 4199 — TCP/IP Network Interface
                            Configuration"
                          </a>
                          .{" "}
                          <a href="/wiki/Microsoft" title="Microsoft">
                            Microsoft
                          </a>
                          . 7 January 2009.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20131222151743/http://technet.microsoft.com/en-us/library/dd379922(v=ws.10).aspx"
                          >
                            Archived
                          </a>{" "}
                          from the original on 22 December 2013
                          <span className="reference-accessdate">
                            . Retrieved <span className="nowrap">2 June</span>{" "}
                            2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Event+ID+4199+%E2%80%94+TCP%2FIP+Network+Interface+Configuration&amp;rft.pub=Microsoft&amp;rft.date=2009-01-07&amp;rft_id=https%3A%2F%2Ftechnet.microsoft.com%2Fen-us%2Flibrary%2Fdd379922%28v%3Dws.10%29.aspx&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        "Updated: 7 January 2009"
                      </span>
                    </li>
                    <li id="cite_note-16">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-16">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          Mitchell, Bradley.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://compnetworking.about.com/od/workingwithipaddresses/f/ip_conflict.htm"
                          >
                            "IP Address Conflicts – What Is an IP Address
                            Conflict?"
                          </a>
                          .{" "}
                          <a
                            href="/wiki/About.com"
                            className="mw-redirect"
                            title="About.com"
                          >
                            About.com
                          </a>
                          .{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20140413194343/http://compnetworking.about.com/od/workingwithipaddresses/f/ip_conflict.htm"
                          >
                            Archived
                          </a>{" "}
                          from the original on 13 April 2014
                          <span className="reference-accessdate">
                            . Retrieved{" "}
                            <span className="nowrap">23 November</span> 2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=IP+Address+Conflicts+%E2%80%93+What+Is+an+IP+Address+Conflict%3F&amp;rft.pub=About.com&amp;rft.au=Mitchell%2C+Bradley&amp;rft_id=http%3A%2F%2Fcompnetworking.about.com%2Fod%2Fworkingwithipaddresses%2Ff%2Fip_conflict.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-17">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-17">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          Kishore, Aseem (4 August 2009).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://www.online-tech-tips.com/computer-tips/ip-address-already-in-use/"
                          >
                            "How to Fix an IP Address Conflict"
                          </a>
                          . Online Tech Tips Online-tech-tips.com.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20130825040120/http://www.online-tech-tips.com/computer-tips/ip-address-already-in-use/"
                          >
                            Archived
                          </a>{" "}
                          from the original on 25 August 2013
                          <span className="reference-accessdate">
                            . Retrieved{" "}
                            <span className="nowrap">23 November</span> 2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=How+to+Fix+an+IP+Address+Conflict&amp;rft.pub=Online+Tech+Tips+Online-tech-tips.com&amp;rft.date=2009-08-04&amp;rft.au=Kishore%2C+Aseem&amp;rft_id=http%3A%2F%2Fwww.online-tech-tips.com%2Fcomputer-tips%2Fip-address-already-in-use%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-18">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-18">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20130926071157/http://windows.microsoft.com/en-us/windows7/get-help-with-there-is-an-ip-address-conflict-message"
                          >
                            "Get help with &quot;There is an IP address
                            conflict&quot; message"
                          </a>
                          .{" "}
                          <a href="/wiki/Microsoft" title="Microsoft">
                            Microsoft
                          </a>
                          . 22 November 2013. Archived from{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://windows.microsoft.com/en-us/windows7/get-help-with-there-is-an-ip-address-conflict-message"
                          >
                            the original
                          </a>{" "}
                          on 26 September 2013
                          <span className="reference-accessdate">
                            . Retrieved{" "}
                            <span className="nowrap">23 November</span> 2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Get+help+with+%26quot%3BThere+is+an+IP+address+conflict%26quot%3B+message&amp;rft.pub=Microsoft&amp;rft.date=2013-11-22&amp;rft_id=http%3A%2F%2Fwindows.microsoft.com%2Fen-us%2Fwindows7%2Fget-help-with-there-is-an-ip-address-conflict-message&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-19">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-19">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://support.microsoft.com/kb/q133490"
                          >
                            "Fix duplicate IP address conflicts on a DHCP
                            network"
                          </a>
                          .{" "}
                          <a href="/wiki/Microsoft" title="Microsoft">
                            Microsoft
                          </a>
                          .{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20141228223206/http://support.microsoft.com/kb/q133490"
                          >
                            Archived
                          </a>{" "}
                          from the original on 28 December 2014
                          <span className="reference-accessdate">
                            . Retrieved{" "}
                            <span className="nowrap">23 November</span> 2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Fix+duplicate+IP+address+conflicts+on+a+DHCP+network&amp;rft.pub=Microsoft&amp;rft_id=http%3A%2F%2Fsupport.microsoft.com%2Fkb%2Fq133490&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />{" "}
                        Article ID: 133490 – Last Review: 15 October 2013 –
                        Revision: 5.0
                      </span>
                    </li>
                    <li id="cite_note-20">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-20">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          Moran, Joseph (1 September 2010).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://www.webopedia.com/DidYouKnow/Internet/2007/IP_Address_Conflicts.asp"
                          >
                            "Understanding And Resolving IP Address Conflicts -
                            Webopedia.com"
                          </a>
                          . Webopedia.com.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20131002155215/http://www.webopedia.com/DidYouKnow/Internet/2007/IP_Address_Conflicts.asp"
                          >
                            Archived
                          </a>{" "}
                          from the original on 2 October 2013
                          <span className="reference-accessdate">
                            . Retrieved{" "}
                            <span className="nowrap">23 November</span> 2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Understanding+And+Resolving+IP+Address+Conflicts+-+Webopedia.com&amp;rft.pub=Webopedia.com&amp;rft.date=2010-09-01&amp;rft.au=Moran%2C+Joseph&amp;rft_id=http%3A%2F%2Fwww.webopedia.com%2FDidYouKnow%2FInternet%2F2007%2FIP_Address_Conflicts.asp&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-rfc5771-21">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-rfc5771_21-0">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation">
                          M. Cotton; L. Vegoda; D. Meyer (March 2010).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://tools.ietf.org/html/rfc5771"
                          >
                            <i>
                              IANA Guidelines for IPv4 Multicast Address
                              Assignments
                            </i>
                          </a>
                          .{" "}
                          <a
                            href="/wiki/IETF"
                            className="mw-redirect"
                            title="IETF"
                          >
                            IETF
                          </a>
                          .{" "}
                          <a
                            href="/wiki/Digital_object_identifier"
                            title="Digital object identifier"
                          >
                            doi
                          </a>
                          :
                          <span
                            className="cs1-lock-free"
                            title="Freely accessible"
                          >
                            <a
                              rel="nofollow"
                              className="external text"
                              href="//doi.org/10.17487%2FRFC5771"
                            >
                              10.17487/RFC5771
                            </a>
                          </span>
                          .{" "}
                          <a
                            href="/wiki/International_Standard_Serial_Number"
                            title="International Standard Serial Number"
                          >
                            ISSN
                          </a>
                          &#160;
                          <a
                            rel="nofollow"
                            className="external text"
                            href="//www.worldcat.org/issn/2070-1721"
                          >
                            2070-1721
                          </a>
                          . BCP 51.&#32;RFC 5771.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=IANA+Guidelines+for+IPv4+Multicast+Address+Assignments&amp;rft.pub=IETF&amp;rft.date=2010-03&amp;rft_id=info%3Adoi%2F10.17487%2F&#82;FC5771&amp;rft.issn=2070-1721&amp;rft.au=M.+Cotton&amp;rft.au=L.+Vegoda&amp;rft.au=D.+Meyer&amp;rft_id=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc5771&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-22">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-22">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://ipinfo.io/"
                          >
                            "IP Information"
                          </a>
                          . 11 April 2013.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20130704024032/http://ipinfo.io/"
                          >
                            Archived
                          </a>{" "}
                          from the original on 4 July 2013
                          <span className="reference-accessdate">
                            . Retrieved <span className="nowrap">11 April</span>{" "}
                            2013
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=IP+Information&amp;rft.date=2013-04-11&amp;rft_id=http%3A%2F%2Fipinfo.io%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-23">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-23">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://www.thewhir.com/web-hosting-news/netacuity-edge-offers-hyper-local-ip-targeting"
                          >
                            "NetAcuity Edge Offers Hyper-local IP targeting"
                          </a>
                          . 28 July 2009.{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20120205000152/http://www.thewhir.com/web-hosting-news/netacuity-edge-offers-hyper-local-ip-targeting"
                          >
                            Archived
                          </a>{" "}
                          from the original on 5 February 2012
                          <span className="reference-accessdate">
                            . Retrieved{" "}
                            <span className="nowrap">10 December</span> 2011
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=NetAcuity+Edge+Offers+Hyper-local+IP+targeting&amp;rft.date=2009-07-28&amp;rft_id=http%3A%2F%2Fwww.thewhir.com%2Fweb-hosting-news%2Fnetacuity-edge-offers-hyper-local-ip-targeting&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-24">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-24">^</a>
                        </b>
                      </span>{" "}
                      <span className="reference-text">
                        <cite className="citation book">
                          Comer, Douglas (2000).{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://www.cs.purdue.edu/homes/dec/netbooks.html"
                          >
                            <i>
                              Internetworking with TCP/IP:Principles, Protocols,
                              and Architectures – 4th ed
                            </i>
                          </a>
                          . Upper Saddle River, NJ: Prentice Hall. p.&#160;394.{" "}
                          <a
                            href="/wiki/International_Standard_Book_Number"
                            title="International Standard Book Number"
                          >
                            ISBN
                          </a>
                          &#160;
                          <a
                            href="/wiki/Special:BookSources/978-0-13-018380-4"
                            title="Special:BookSources/978-0-13-018380-4"
                          >
                            <bdi>978-0-13-018380-4</bdi>
                          </a>
                          .{" "}
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://web.archive.org/web/20100413232359/http://www.cs.purdue.edu/homes/dec/netbooks.html"
                          >
                            Archived
                          </a>{" "}
                          from the original on 13 April 2010.
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Internetworking+with+TCP%2FIP%3APrinciples%2C+Protocols%2C+and+Architectures+%E2%80%93+4th+ed.&amp;rft.place=Upper+Saddle+River%2C+NJ&amp;rft.pages=394&amp;rft.pub=Prentice+Hall&amp;rft.date=2000&amp;rft.isbn=978-0-13-018380-4&amp;rft.aulast=Comer&amp;rft.aufirst=Douglas&amp;rft_id=http%3A%2F%2Fwww.cs.purdue.edu%2Fhomes%2Fdec%2Fnetbooks.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AIP+address"
                          className="Z3988"
                        ></span>
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
              <h2>
                <span className="mw-headline" id="External_links">
                  External links
                </span>
              </h2>
              <ul>
                <li>
                  <a
                    rel="nofollow"
                    className="external text"
                    href="https://curlie.org/Computers/Internet/Protocols/IP"
                  >
                    IP
                  </a>{" "}
                  at{" "}
                  <a href="/wiki/Curlie" className="mw-redirect" title="Curlie">
                    Curlie
                  </a>
                </li>
              </ul>
            </div>
            <noscript>
              <img
                src="//en.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1"
                alt=""
                title=""
                width="1"
                height="1"
              />
            </noscript>
          </div>

          <div className="printfooter">
            Retrieved from "
            <a
              dir="ltr"
              href="https://en.wikipedia.org/w/index.php?title=IP_address&amp;oldid=920139052"
            >
              https://en.wikipedia.org/w/index.php?title=IP_address&amp;oldid=920139052
            </a>
            "
          </div>

          <div id="catlinks" className="catlinks" data-mw="interface">
            <div id="mw-normal-catlinks" className="mw-normal-catlinks">
              <a href="/wiki/Help:Category" title="Help:Category">
                Categories
              </a>
              :{" "}
              <ul>
                <li>
                  <a
                    href="/wiki/Category:IP_addresses"
                    title="Category:IP addresses"
                  >
                    IP addresses
                  </a>
                </li>
              </ul>
            </div>
            <div
              id="mw-hidden-catlinks"
              className="mw-hidden-catlinks mw-hidden-cats-hidden"
            >
              Hidden categories:{" "}
              <ul>
                <li>
                  <a
                    href="/wiki/Category:Pages_using_RFC_magic_links"
                    title="Category:Pages using RFC magic links"
                  >
                    Pages using RFC magic links
                  </a>
                </li>
                <li>
                  <a
                    href="/wiki/Category:Wikipedia_indefinitely_semi-protected_pages"
                    title="Category:Wikipedia indefinitely semi-protected pages"
                  >
                    Wikipedia indefinitely semi-protected pages
                  </a>
                </li>
                <li>
                  <a
                    href="/wiki/Category:Wikipedia_indefinitely_move-protected_pages"
                    title="Category:Wikipedia indefinitely move-protected pages"
                  >
                    Wikipedia indefinitely move-protected pages
                  </a>
                </li>
                <li>
                  <a
                    href="/wiki/Category:Articles_with_short_description"
                    title="Category:Articles with short description"
                  >
                    Articles with short description
                  </a>
                </li>
                <li>
                  <a
                    href="/wiki/Category:Use_dmy_dates_from_December_2015"
                    title="Category:Use dmy dates from December 2015"
                  >
                    Use dmy dates from December 2015
                  </a>
                </li>
                <li>
                  <a
                    href="/wiki/Category:Articles_needing_more_detailed_references"
                    title="Category:Articles needing more detailed references"
                  >
                    Articles needing more detailed references
                  </a>
                </li>
                <li>
                  <a
                    href="/wiki/Category:Articles_with_Curlie_links"
                    title="Category:Articles with Curlie links"
                  >
                    Articles with Curlie links
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="visualClear"></div>
        </div>
      </div>
      <div id="mw-data-after-content">
        <div className="read-more-container"></div>
      </div>

      <div id="mw-navigation">
        <h2>Navigation menu</h2>
        <div id="mw-head">
          <div
            id="p-personal"
            role="navigation"
            aria-labelledby="p-personal-label"
          >
            <h3 id="p-personal-label">Personal tools</h3>
            <ul>
              <li id="pt-anonuserpage">Not logged in</li>
              <li id="pt-anontalk">
                <a
                  href="/wiki/Special:MyTalk"
                  title="Discussion about edits from this IP address [n]"
                  accessKey="n"
                >
                  Talk
                </a>
              </li>
              <li id="pt-anoncontribs">
                <a
                  href="/wiki/Special:MyContributions"
                  title="A list of edits made from this IP address [y]"
                  accessKey="y"
                >
                  Contributions
                </a>
              </li>
              <li id="pt-createaccount">
                <a
                  href="/w/index.php?title=Special:CreateAccount&amp;returnto=IP+address"
                  title="You are encouraged to create an account and log in; however, it is not mandatory"
                >
                  Create account
                </a>
              </li>
              <li id="pt-login">
                <a
                  href="/w/index.php?title=Special:UserLogin&amp;returnto=IP+address"
                  title="You&#039;re encouraged to log in; however, it&#039;s not mandatory. [o]"
                  accessKey="o"
                >
                  Log in
                </a>
              </li>{" "}
            </ul>
          </div>
          <div id="left-navigation">
            <div
              id="p-namespaces"
              role="navigation"
              className="vectorTabs"
              aria-labelledby="p-namespaces-label"
            >
              <h3 id="p-namespaces-label">Namespaces</h3>
              <ul>
                <li id="ca-nstab-main" className="selected">
                  <span>
                    <a
                      href="/wiki/IP_address"
                      title="View the content page [c]"
                      accessKey="c"
                    >
                      Article
                    </a>
                  </span>
                </li>
                <li id="ca-talk">
                  <span>
                    <a
                      href="/wiki/Talk:IP_address"
                      rel="discussion"
                      title="Discussion about the content page [t]"
                      accessKey="t"
                    >
                      Talk
                    </a>
                  </span>
                </li>{" "}
              </ul>
            </div>
            <div
              id="p-variants"
              role="navigation"
              className="vectorMenu emptyPortlet"
              aria-labelledby="p-variants-label"
            >
              <input
                type="checkbox"
                className="vectorMenuCheckbox"
                aria-labelledby="p-variants-label"
              />
              <h3 id="p-variants-label">
                <span>Variants</span>
              </h3>
              <ul className="menu"></ul>
            </div>
          </div>
          <div id="right-navigation">
            <div
              id="p-views"
              role="navigation"
              className="vectorTabs"
              aria-labelledby="p-views-label"
            >
              <h3 id="p-views-label">Views</h3>
              <ul>
                <li id="ca-view" className="collapsible selected">
                  <span>
                    <a href="/wiki/IP_address">Read</a>
                  </span>
                </li>
                <li id="ca-viewsource" className="collapsible">
                  <span>
                    <a
                      href="/w/index.php?title=IP_address&amp;action=edit"
                      title="This page is protected.&#10;You can view its source [e]"
                      accessKey="e"
                    >
                      View source
                    </a>
                  </span>
                </li>
                <li id="ca-history" className="collapsible">
                  <span>
                    <a
                      href="/w/index.php?title=IP_address&amp;action=history"
                      title="Past revisions of this page [h]"
                      accessKey="h"
                    >
                      View history
                    </a>
                  </span>
                </li>{" "}
              </ul>
            </div>
            <div
              id="p-cactions"
              role="navigation"
              className="vectorMenu emptyPortlet"
              aria-labelledby="p-cactions-label"
            >
              <input
                type="checkbox"
                className="vectorMenuCheckbox"
                aria-labelledby="p-cactions-label"
              />
              <h3 id="p-cactions-label">
                <span>More</span>
              </h3>
              <ul className="menu"></ul>
            </div>
            <div id="p-search" role="search">
              <h3>
                <label htmlFor="searchInput">Search</label>
              </h3>
              <form action="/w/index.php" id="searchform">
                <div id="simpleSearch">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search Wikipedia"
                    title="Search Wikipedia [f]"
                    accessKey="f"
                    id="searchInput"
                  />
                  <input type="hidden" value="Special:Search" name="title" />
                  <input
                    type="submit"
                    name="fulltext"
                    value="Search"
                    title="Search Wikipedia for this text"
                    id="mw-searchButton"
                    className="searchButton mw-fallbackSearchButton"
                  />
                  <input
                    type="submit"
                    name="go"
                    value="Go"
                    title="Go to a page with this exact name if it exists"
                    id="searchButton"
                    className="searchButton"
                  />{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="mw-panel">
          <div id="p-logo" role="banner">
            <a
              className="mw-wiki-logo"
              href="/wiki/Main_Page"
              title="Visit the main page"
            ></a>
          </div>
          <div
            className="portal"
            role="navigation"
            id="p-navigation"
            aria-labelledby="p-navigation-label"
          >
            <h3 id="p-navigation-label">Navigation</h3>
            <div className="body">
              <ul>
                <li id="n-mainpage-description">
                  <a
                    href="/wiki/Main_Page"
                    title="Visit the main page [z]"
                    accessKey="z"
                  >
                    Main page
                  </a>
                </li>
                <li id="n-contents">
                  <a
                    href="/wiki/Portal:Contents"
                    title="Guides to browsing Wikipedia"
                  >
                    Contents
                  </a>
                </li>
                <li id="n-featuredcontent">
                  <a
                    href="/wiki/Portal:Featured_content"
                    title="Featured content – the best of Wikipedia"
                  >
                    Featured content
                  </a>
                </li>
                <li id="n-currentevents">
                  <a
                    href="/wiki/Portal:Current_events"
                    title="Find background information on current events"
                  >
                    Current events
                  </a>
                </li>
                <li id="n-randompage">
                  <a
                    href="/wiki/Special:Random"
                    title="Load a random article [x]"
                    accessKey="x"
                  >
                    Random article
                  </a>
                </li>
                <li id="n-sitesupport">
                  <a
                    href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en"
                    title="Support us"
                  >
                    Donate to Wikipedia
                  </a>
                </li>
                <li id="n-shoplink">
                  <a
                    href="//shop.wikimedia.org"
                    title="Visit the Wikipedia store"
                  >
                    Wikipedia store
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div
            className="portal"
            role="navigation"
            id="p-interaction"
            aria-labelledby="p-interaction-label"
          >
            <h3 id="p-interaction-label">Interaction</h3>
            <div className="body">
              <ul>
                <li id="n-help">
                  <a
                    href="/wiki/Help:Contents"
                    title="Guidance on how to use and edit Wikipedia"
                  >
                    Help
                  </a>
                </li>
                <li id="n-aboutsite">
                  <a
                    href="/wiki/Wikipedia:About"
                    title="Find out about Wikipedia"
                  >
                    About Wikipedia
                  </a>
                </li>
                <li id="n-portal">
                  <a
                    href="/wiki/Wikipedia:Community_portal"
                    title="About the project, what you can do, where to find things"
                  >
                    Community portal
                  </a>
                </li>
                <li id="n-recentchanges">
                  <a
                    href="/wiki/Special:RecentChanges"
                    title="A list of recent changes in the wiki [r]"
                    accessKey="r"
                  >
                    Recent changes
                  </a>
                </li>
                <li id="n-contactpage">
                  <a
                    href="//en.wikipedia.org/wiki/Wikipedia:Contact_us"
                    title="How to contact Wikipedia"
                  >
                    Contact page
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div
            className="portal"
            role="navigation"
            id="p-tb"
            aria-labelledby="p-tb-label"
          >
            <h3 id="p-tb-label">Tools</h3>
            <div className="body">
              <ul>
                <li id="t-whatlinkshere">
                  <a
                    href="/wiki/Special:WhatLinksHere/IP_address"
                    title="List of all English Wikipedia pages containing links to this page [j]"
                    accessKey="j"
                  >
                    What links here
                  </a>
                </li>
                <li id="t-recentchangeslinked">
                  <a
                    href="/wiki/Special:RecentChangesLinked/IP_address"
                    rel="nofollow"
                    title="Recent changes in pages linked from this page [k]"
                    accessKey="k"
                  >
                    Related changes
                  </a>
                </li>
                <li id="t-upload">
                  <a
                    href="/wiki/Wikipedia:File_Upload_Wizard"
                    title="Upload files [u]"
                    accessKey="u"
                  >
                    Upload file
                  </a>
                </li>
                <li id="t-specialpages">
                  <a
                    href="/wiki/Special:SpecialPages"
                    title="A list of all special pages [q]"
                    accessKey="q"
                  >
                    Special pages
                  </a>
                </li>
                <li id="t-permalink">
                  <a
                    href="/w/index.php?title=IP_address&amp;oldid=920139052"
                    title="Permanent link to this revision of the page"
                  >
                    Permanent link
                  </a>
                </li>
                <li id="t-info">
                  <a
                    href="/w/index.php?title=IP_address&amp;action=info"
                    title="More information about this page"
                  >
                    Page information
                  </a>
                </li>
                <li id="t-wikibase">
                  <a
                    href="https://www.wikidata.org/wiki/Special:EntityPage/Q11135"
                    title="Link to connected data repository item [g]"
                    accessKey="g"
                  >
                    Wikidata item
                  </a>
                </li>
                <li id="t-cite">
                  <a
                    href="/w/index.php?title=Special:CiteThisPage&amp;page=IP_address&amp;id=920139052"
                    title="Information on how to cite this page"
                  >
                    Cite this page
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div
            className="portal"
            role="navigation"
            id="p-coll-print_export"
            aria-labelledby="p-coll-print_export-label"
          >
            <h3 id="p-coll-print_export-label">Print/export</h3>
            <div className="body">
              <ul>
                <li id="coll-create_a_book">
                  <a href="/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=IP+address">
                    Create a book
                  </a>
                </li>
                <li id="coll-download-as-rl">
                  <a href="/w/index.php?title=Special:ElectronPdf&amp;page=IP+address&amp;action=show-download-screen">
                    Download as PDF
                  </a>
                </li>
                <li id="t-print">
                  <a
                    href="/w/index.php?title=IP_address&amp;printable=yes"
                    title="Printable version of this page [p]"
                    accessKey="p"
                  >
                    Printable version
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div
            className="portal"
            role="navigation"
            id="p-lang"
            aria-labelledby="p-lang-label"
          >
            <h3 id="p-lang-label">Languages</h3>
            <div className="body">
              <ul>
                <li className="interlanguage-link interwiki-af">
                  <a
                    href="https://af.wikipedia.org/wiki/IP-adres"
                    title="IP-adres – Afrikaans"
                    lang="af"
                    hrefLang="af"
                    className="interlanguage-link-target"
                  >
                    Afrikaans
                  </a>
                </li>
                <li className="interlanguage-link interwiki-als">
                  <a
                    href="https://als.wikipedia.org/wiki/IP-Adresse"
                    title="IP-Adresse – Alemannisch"
                    lang="gsw"
                    hrefLang="gsw"
                    className="interlanguage-link-target"
                  >
                    Alemannisch
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ar">
                  <a
                    href="https://ar.wikipedia.org/wiki/%D8%B9%D9%86%D9%88%D8%A7%D9%86_%D8%A2%D9%8A_%D8%A8%D9%8A"
                    title="عنوان آي بي – Arabic"
                    lang="ar"
                    hrefLang="ar"
                    className="interlanguage-link-target"
                  >
                    العربية
                  </a>
                </li>
                <li className="interlanguage-link interwiki-an">
                  <a
                    href="https://an.wikipedia.org/wiki/Adreza_IP"
                    title="Adreza IP – Aragonese"
                    lang="an"
                    hrefLang="an"
                    className="interlanguage-link-target"
                  >
                    Aragonés
                  </a>
                </li>
                <li className="interlanguage-link interwiki-frp">
                  <a
                    href="https://frp.wikipedia.org/wiki/Adr%C3%A8ce_IP"
                    title="Adrèce IP – Arpitan"
                    lang="frp"
                    hrefLang="frp"
                    className="interlanguage-link-target"
                  >
                    Arpetan
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ast">
                  <a
                    href="https://ast.wikipedia.org/wiki/Direici%C3%B3n_IP"
                    title="Direición IP – Asturian"
                    lang="ast"
                    hrefLang="ast"
                    className="interlanguage-link-target"
                  >
                    Asturianu
                  </a>
                </li>
                <li className="interlanguage-link interwiki-az">
                  <a
                    href="https://az.wikipedia.org/wiki/IP-%C3%BCnvan"
                    title="IP-ünvan – Azerbaijani"
                    lang="az"
                    hrefLang="az"
                    className="interlanguage-link-target"
                  >
                    Azərbaycanca
                  </a>
                </li>
                <li className="interlanguage-link interwiki-bn">
                  <a
                    href="https://bn.wikipedia.org/wiki/%E0%A6%86%E0%A6%87%E0%A6%AA%E0%A6%BF_%E0%A6%A0%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A6%BE"
                    title="আইপি ঠিকানা – Bangla"
                    lang="bn"
                    hrefLang="bn"
                    className="interlanguage-link-target"
                  >
                    বাংলা
                  </a>
                </li>
                <li className="interlanguage-link interwiki-zh-min-nan">
                  <a
                    href="https://zh-min-nan.wikipedia.org/wiki/IP_t%C4%93-ch%C3%AD"
                    title="IP tē-chí – Chinese (Min Nan)"
                    lang="nan"
                    hrefLang="nan"
                    className="interlanguage-link-target"
                  >
                    Bân-lâm-gú
                  </a>
                </li>
                <li className="interlanguage-link interwiki-be">
                  <a
                    href="https://be.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B0%D1%81"
                    title="IP-адрас – Belarusian"
                    lang="be"
                    hrefLang="be"
                    className="interlanguage-link-target"
                  >
                    Беларуская
                  </a>
                </li>
                <li className="interlanguage-link interwiki-be-x-old">
                  <a
                    href="https://be-x-old.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B0%D1%81"
                    title="IP-адрас – Belarusian (Taraškievica orthography)"
                    lang="be-tarask"
                    hrefLang="be-tarask"
                    className="interlanguage-link-target"
                  >
                    Беларуская (тарашкевіца)‎
                  </a>
                </li>
                <li className="interlanguage-link interwiki-bg">
                  <a
                    href="https://bg.wikipedia.org/wiki/IP_%D0%B0%D0%B4%D1%80%D0%B5%D1%81"
                    title="IP адрес – Bulgarian"
                    lang="bg"
                    hrefLang="bg"
                    className="interlanguage-link-target"
                  >
                    Български
                  </a>
                </li>
                <li className="interlanguage-link interwiki-bar">
                  <a
                    href="https://bar.wikipedia.org/wiki/IP-Adress"
                    title="IP-Adress – Bavarian"
                    lang="bar"
                    hrefLang="bar"
                    className="interlanguage-link-target"
                  >
                    Boarisch
                  </a>
                </li>
                <li className="interlanguage-link interwiki-bs">
                  <a
                    href="https://bs.wikipedia.org/wiki/IP-adresa"
                    title="IP-adresa – Bosnian"
                    lang="bs"
                    hrefLang="bs"
                    className="interlanguage-link-target"
                  >
                    Bosanski
                  </a>
                </li>
                <li className="interlanguage-link interwiki-br">
                  <a
                    href="https://br.wikipedia.org/wiki/Chomlec%E2%80%99h_IP"
                    title="Chomlec’h IP – Breton"
                    lang="br"
                    hrefLang="br"
                    className="interlanguage-link-target"
                  >
                    Brezhoneg
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ca">
                  <a
                    href="https://ca.wikipedia.org/wiki/Adre%C3%A7a_IP"
                    title="Adreça IP – Catalan"
                    lang="ca"
                    hrefLang="ca"
                    className="interlanguage-link-target"
                  >
                    Català
                  </a>
                </li>
                <li className="interlanguage-link interwiki-cs">
                  <a
                    href="https://cs.wikipedia.org/wiki/IP_adresa"
                    title="IP adresa – Czech"
                    lang="cs"
                    hrefLang="cs"
                    className="interlanguage-link-target"
                  >
                    Čeština
                  </a>
                </li>
                <li className="interlanguage-link interwiki-cy">
                  <a
                    href="https://cy.wikipedia.org/wiki/Cyfeiriad_IP"
                    title="Cyfeiriad IP – Welsh"
                    lang="cy"
                    hrefLang="cy"
                    className="interlanguage-link-target"
                  >
                    Cymraeg
                  </a>
                </li>
                <li className="interlanguage-link interwiki-da">
                  <a
                    href="https://da.wikipedia.org/wiki/Internetadresse"
                    title="Internetadresse – Danish"
                    lang="da"
                    hrefLang="da"
                    className="interlanguage-link-target"
                  >
                    Dansk
                  </a>
                </li>
                <li className="interlanguage-link interwiki-de">
                  <a
                    href="https://de.wikipedia.org/wiki/IP-Adresse"
                    title="IP-Adresse – German"
                    lang="de"
                    hrefLang="de"
                    className="interlanguage-link-target"
                  >
                    Deutsch
                  </a>
                </li>
                <li className="interlanguage-link interwiki-et">
                  <a
                    href="https://et.wikipedia.org/wiki/IP-aadress"
                    title="IP-aadress – Estonian"
                    lang="et"
                    hrefLang="et"
                    className="interlanguage-link-target"
                  >
                    Eesti
                  </a>
                </li>
                <li className="interlanguage-link interwiki-el">
                  <a
                    href="https://el.wikipedia.org/wiki/%CE%94%CE%B9%CE%B5%CF%8D%CE%B8%CF%85%CE%BD%CF%83%CE%B7_%CE%94%CE%B9%CE%B1%CE%B4%CE%B9%CE%BA%CF%84%CF%85%CE%B1%CE%BA%CE%BF%CF%8D_%CE%A0%CF%81%CF%89%CF%84%CE%BF%CE%BA%CF%8C%CE%BB%CE%BB%CE%BF%CF%85"
                    title="Διεύθυνση Διαδικτυακού Πρωτοκόλλου – Greek"
                    lang="el"
                    hrefLang="el"
                    className="interlanguage-link-target"
                  >
                    Ελληνικά
                  </a>
                </li>
                <li className="interlanguage-link interwiki-es">
                  <a
                    href="https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP"
                    title="Dirección IP – Spanish"
                    lang="es"
                    hrefLang="es"
                    className="interlanguage-link-target"
                  >
                    Español
                  </a>
                </li>
                <li className="interlanguage-link interwiki-eo">
                  <a
                    href="https://eo.wikipedia.org/wiki/IP-adreso"
                    title="IP-adreso – Esperanto"
                    lang="eo"
                    hrefLang="eo"
                    className="interlanguage-link-target"
                  >
                    Esperanto
                  </a>
                </li>
                <li className="interlanguage-link interwiki-eu">
                  <a
                    href="https://eu.wikipedia.org/wiki/IP_helbide"
                    title="IP helbide – Basque"
                    lang="eu"
                    hrefLang="eu"
                    className="interlanguage-link-target"
                  >
                    Euskara
                  </a>
                </li>
                <li className="interlanguage-link interwiki-fa">
                  <a
                    href="https://fa.wikipedia.org/wiki/%D9%86%D8%B4%D8%A7%D9%86%DB%8C_%D8%A2%DB%8C%E2%80%8C%D9%BE%DB%8C"
                    title="نشانی آی‌پی – Persian"
                    lang="fa"
                    hrefLang="fa"
                    className="interlanguage-link-target"
                  >
                    فارسی
                  </a>
                </li>
                <li className="interlanguage-link interwiki-fo">
                  <a
                    href="https://fo.wikipedia.org/wiki/IP-adressa"
                    title="IP-adressa – Faroese"
                    lang="fo"
                    hrefLang="fo"
                    className="interlanguage-link-target"
                  >
                    Føroyskt
                  </a>
                </li>
                <li className="interlanguage-link interwiki-fr">
                  <a
                    href="https://fr.wikipedia.org/wiki/Adresse_IP"
                    title="Adresse IP – French"
                    lang="fr"
                    hrefLang="fr"
                    className="interlanguage-link-target"
                  >
                    Français
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ga">
                  <a
                    href="https://ga.wikipedia.org/wiki/Seoladh_IP"
                    title="Seoladh IP – Irish"
                    lang="ga"
                    hrefLang="ga"
                    className="interlanguage-link-target"
                  >
                    Gaeilge
                  </a>
                </li>
                <li className="interlanguage-link interwiki-gag">
                  <a
                    href="https://gag.wikipedia.org/wiki/IP_adresi"
                    title="IP adresi – Gagauz"
                    lang="gag"
                    hrefLang="gag"
                    className="interlanguage-link-target"
                  >
                    Gagauz
                  </a>
                </li>
                <li className="interlanguage-link interwiki-gl">
                  <a
                    href="https://gl.wikipedia.org/wiki/Enderezo_IP"
                    title="Enderezo IP – Galician"
                    lang="gl"
                    hrefLang="gl"
                    className="interlanguage-link-target"
                  >
                    Galego
                  </a>
                </li>
                <li className="interlanguage-link interwiki-gu">
                  <a
                    href="https://gu.wikipedia.org/wiki/IP_%E0%AA%8F%E0%AA%A1%E0%AB%8D%E0%AA%B0%E0%AB%87%E0%AA%B8"
                    title="IP એડ્રેસ – Gujarati"
                    lang="gu"
                    hrefLang="gu"
                    className="interlanguage-link-target"
                  >
                    ગુજરાતી
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ko">
                  <a
                    href="https://ko.wikipedia.org/wiki/IP_%EC%A3%BC%EC%86%8C"
                    title="IP 주소 – Korean"
                    lang="ko"
                    hrefLang="ko"
                    className="interlanguage-link-target"
                  >
                    한국어
                  </a>
                </li>
                <li className="interlanguage-link interwiki-hy">
                  <a
                    href="https://hy.wikipedia.org/wiki/%D4%B1%D5%B5-%D6%83%D5%AB_%D5%B0%D5%A1%D5%BD%D6%81%D5%A5%D5%B6%D5%A5%D6%80"
                    title="Այ-փի հասցեներ – Armenian"
                    lang="hy"
                    hrefLang="hy"
                    className="interlanguage-link-target"
                  >
                    Հայերեն
                  </a>
                </li>
                <li className="interlanguage-link interwiki-hi">
                  <a
                    href="https://hi.wikipedia.org/wiki/%E0%A4%87%E0%A4%82%E0%A4%9F%E0%A4%B0%E0%A4%A8%E0%A5%87%E0%A4%9F_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%9F%E0%A5%8B%E0%A4%95%E0%A5%89%E0%A4%B2"
                    title="इंटरनेट प्रोटोकॉल – Hindi"
                    lang="hi"
                    hrefLang="hi"
                    className="interlanguage-link-target"
                  >
                    हिन्दी
                  </a>
                </li>
                <li className="interlanguage-link interwiki-hr">
                  <a
                    href="https://hr.wikipedia.org/wiki/IP_broj"
                    title="IP broj – Croatian"
                    lang="hr"
                    hrefLang="hr"
                    className="interlanguage-link-target"
                  >
                    Hrvatski
                  </a>
                </li>
                <li className="interlanguage-link interwiki-id">
                  <a
                    href="https://id.wikipedia.org/wiki/Alamat_IP"
                    title="Alamat IP – Indonesian"
                    lang="id"
                    hrefLang="id"
                    className="interlanguage-link-target"
                  >
                    Bahasa Indonesia
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ia">
                  <a
                    href="https://ia.wikipedia.org/wiki/Adresse_IP"
                    title="Adresse IP – Interlingua"
                    lang="ia"
                    hrefLang="ia"
                    className="interlanguage-link-target"
                  >
                    Interlingua
                  </a>
                </li>
                <li className="interlanguage-link interwiki-is">
                  <a
                    href="https://is.wikipedia.org/wiki/IP-tala"
                    title="IP-tala – Icelandic"
                    lang="is"
                    hrefLang="is"
                    className="interlanguage-link-target"
                  >
                    Íslenska
                  </a>
                </li>
                <li className="interlanguage-link interwiki-it">
                  <a
                    href="https://it.wikipedia.org/wiki/Indirizzo_IP"
                    title="Indirizzo IP – Italian"
                    lang="it"
                    hrefLang="it"
                    className="interlanguage-link-target"
                  >
                    Italiano
                  </a>
                </li>
                <li className="interlanguage-link interwiki-he">
                  <a
                    href="https://he.wikipedia.org/wiki/%D7%9B%D7%AA%D7%95%D7%91%D7%AA_IP"
                    title="כתובת IP – Hebrew"
                    lang="he"
                    hrefLang="he"
                    className="interlanguage-link-target"
                  >
                    עברית
                  </a>
                </li>
                <li className="interlanguage-link interwiki-jv">
                  <a
                    href="https://jv.wikipedia.org/wiki/Alamat_IP"
                    title="Alamat IP – Javanese"
                    lang="jv"
                    hrefLang="jv"
                    className="interlanguage-link-target"
                  >
                    Jawa
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ka">
                  <a
                    href="https://ka.wikipedia.org/wiki/IP-%E1%83%9B%E1%83%98%E1%83%A1%E1%83%90%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%98"
                    title="IP-მისამართი – Georgian"
                    lang="ka"
                    hrefLang="ka"
                    className="interlanguage-link-target"
                  >
                    ქართული
                  </a>
                </li>
                <li className="interlanguage-link interwiki-kk">
                  <a
                    href="https://kk.wikipedia.org/wiki/IP_%D0%B0%D0%B4%D1%80%D0%B5%D1%81"
                    title="IP адрес – Kazakh"
                    lang="kk"
                    hrefLang="kk"
                    className="interlanguage-link-target"
                  >
                    Қазақша
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ku">
                  <a
                    href="https://ku.wikipedia.org/wiki/Navn%C3%AE%C5%9Fana_IP"
                    title="Navnîşana IP – Kurdish"
                    lang="ku"
                    hrefLang="ku"
                    className="interlanguage-link-target"
                  >
                    Kurdî
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ky">
                  <a
                    href="https://ky.wikipedia.org/wiki/IP-%D0%B4%D0%B0%D1%80%D0%B5%D0%BA"
                    title="IP-дарек – Kyrgyz"
                    lang="ky"
                    hrefLang="ky"
                    className="interlanguage-link-target"
                  >
                    Кыргызча
                  </a>
                </li>
                <li className="interlanguage-link interwiki-lo">
                  <a
                    href="https://lo.wikipedia.org/wiki/%E0%BA%AB%E0%BA%A1%E0%BA%B2%E0%BA%8D%E0%BB%80%E0%BA%A5%E0%BA%81%E0%BB%84%E0%BA%AD%E0%BA%9E%E0%BA%B5"
                    title="ຫມາຍເລກໄອພີ – Lao"
                    lang="lo"
                    hrefLang="lo"
                    className="interlanguage-link-target"
                  >
                    ລາວ
                  </a>
                </li>
                <li className="interlanguage-link interwiki-lv">
                  <a
                    href="https://lv.wikipedia.org/wiki/IP_adrese"
                    title="IP adrese – Latvian"
                    lang="lv"
                    hrefLang="lv"
                    className="interlanguage-link-target"
                  >
                    Latviešu
                  </a>
                </li>
                <li className="interlanguage-link interwiki-lt">
                  <a
                    href="https://lt.wikipedia.org/wiki/IP_adresas"
                    title="IP adresas – Lithuanian"
                    lang="lt"
                    hrefLang="lt"
                    className="interlanguage-link-target"
                  >
                    Lietuvių
                  </a>
                </li>
                <li className="interlanguage-link interwiki-li">
                  <a
                    href="https://li.wikipedia.org/wiki/IP-adres"
                    title="IP-adres – Limburgish"
                    lang="li"
                    hrefLang="li"
                    className="interlanguage-link-target"
                  >
                    Limburgs
                  </a>
                </li>
                <li className="interlanguage-link interwiki-lmo">
                  <a
                    href="https://lmo.wikipedia.org/wiki/Adressa_IP"
                    title="Adressa IP – Lombard"
                    lang="lmo"
                    hrefLang="lmo"
                    className="interlanguage-link-target"
                  >
                    Lumbaart
                  </a>
                </li>
                <li className="interlanguage-link interwiki-hu">
                  <a
                    href="https://hu.wikipedia.org/wiki/IP-c%C3%ADm"
                    title="IP-cím – Hungarian"
                    lang="hu"
                    hrefLang="hu"
                    className="interlanguage-link-target"
                  >
                    Magyar
                  </a>
                </li>
                <li className="interlanguage-link interwiki-mk">
                  <a
                    href="https://mk.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0"
                    title="IP-адреса – Macedonian"
                    lang="mk"
                    hrefLang="mk"
                    className="interlanguage-link-target"
                  >
                    Македонски
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ml">
                  <a
                    href="https://ml.wikipedia.org/wiki/%E0%B4%90.%E0%B4%AA%E0%B4%BF._%E0%B4%B5%E0%B4%BF%E0%B4%B2%E0%B4%BE%E0%B4%B8%E0%B4%82"
                    title="ഐ.പി. വിലാസം – Malayalam"
                    lang="ml"
                    hrefLang="ml"
                    className="interlanguage-link-target"
                  >
                    മലയാളം
                  </a>
                </li>
                <li className="interlanguage-link interwiki-mi">
                  <a
                    href="https://mi.wikipedia.org/wiki/Nohoanga_kawa_ipurangi"
                    title="Nohoanga kawa ipurangi – Maori"
                    lang="mi"
                    hrefLang="mi"
                    className="interlanguage-link-target"
                  >
                    Māori
                  </a>
                </li>
                <li className="interlanguage-link interwiki-xmf">
                  <a
                    href="https://xmf.wikipedia.org/wiki/IP-%E1%83%9B%E1%83%98%E1%83%9D%E1%83%AC%E1%83%A3%E1%83%A0%E1%83%90%E1%83%A4%E1%83%A3"
                    title="IP-მიოწურაფუ – Mingrelian"
                    lang="xmf"
                    hrefLang="xmf"
                    className="interlanguage-link-target"
                  >
                    მარგალური
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ms">
                  <a
                    href="https://ms.wikipedia.org/wiki/Alamat_IP"
                    title="Alamat IP – Malay"
                    lang="ms"
                    hrefLang="ms"
                    className="interlanguage-link-target"
                  >
                    Bahasa Melayu
                  </a>
                </li>
                <li className="interlanguage-link interwiki-mn">
                  <a
                    href="https://mn.wikipedia.org/wiki/IP_%D1%85%D0%B0%D1%8F%D0%B3"
                    title="IP хаяг – Mongolian"
                    lang="mn"
                    hrefLang="mn"
                    className="interlanguage-link-target"
                  >
                    Монгол
                  </a>
                </li>
                <li className="interlanguage-link interwiki-my">
                  <a
                    href="https://my.wikipedia.org/wiki/%E1%80%A1%E1%80%84%E1%80%BA%E1%80%90%E1%80%AC%E1%80%94%E1%80%80%E1%80%BA_%E1%80%95%E1%80%9B%E1%80%AD%E1%80%AF%E1%80%90%E1%80%AD%E1%80%AF%E1%80%80%E1%80%B1%E1%80%AC%E1%80%9C%E1%80%AD%E1%80%95%E1%80%BA%E1%80%85%E1%80%AC"
                    title="အင်တာနက် ပရိုတိုကောလိပ်စာ – Burmese"
                    lang="my"
                    hrefLang="my"
                    className="interlanguage-link-target"
                  >
                    မြန်မာဘာသာ
                  </a>
                </li>
                <li className="interlanguage-link interwiki-nl">
                  <a
                    href="https://nl.wikipedia.org/wiki/IP-adres"
                    title="IP-adres – Dutch"
                    lang="nl"
                    hrefLang="nl"
                    className="interlanguage-link-target"
                  >
                    Nederlands
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ja">
                  <a
                    href="https://ja.wikipedia.org/wiki/IP%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9"
                    title="IPアドレス – Japanese"
                    lang="ja"
                    hrefLang="ja"
                    className="interlanguage-link-target"
                  >
                    日本語
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ce">
                  <a
                    href="https://ce.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81"
                    title="IP-адрес – Chechen"
                    lang="ce"
                    hrefLang="ce"
                    className="interlanguage-link-target"
                  >
                    Нохчийн
                  </a>
                </li>
                <li className="interlanguage-link interwiki-no">
                  <a
                    href="https://no.wikipedia.org/wiki/IP-adresse"
                    title="IP-adresse – Norwegian"
                    lang="no"
                    hrefLang="no"
                    className="interlanguage-link-target"
                  >
                    Norsk
                  </a>
                </li>
                <li className="interlanguage-link interwiki-nn">
                  <a
                    href="https://nn.wikipedia.org/wiki/IP-adresse"
                    title="IP-adresse – Norwegian Nynorsk"
                    lang="nn"
                    hrefLang="nn"
                    className="interlanguage-link-target"
                  >
                    Norsk nynorsk
                  </a>
                </li>
                <li className="interlanguage-link interwiki-oc">
                  <a
                    href="https://oc.wikipedia.org/wiki/Adre%C3%A7a_IP"
                    title="Adreça IP – Occitan"
                    lang="oc"
                    hrefLang="oc"
                    className="interlanguage-link-target"
                  >
                    Occitan
                  </a>
                </li>
                <li className="interlanguage-link interwiki-mhr">
                  <a
                    href="https://mhr.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81"
                    title="IP-адрес – Eastern Mari"
                    lang="mhr"
                    hrefLang="mhr"
                    className="interlanguage-link-target"
                  >
                    Олык марий
                  </a>
                </li>
                <li className="interlanguage-link interwiki-pa">
                  <a
                    href="https://pa.wikipedia.org/wiki/%E0%A8%86%E0%A8%88%E0%A8%AA%E0%A9%80_%E0%A8%AA%E0%A8%A4%E0%A8%BE"
                    title="ਆਈਪੀ ਪਤਾ – Punjabi"
                    lang="pa"
                    hrefLang="pa"
                    className="interlanguage-link-target"
                  >
                    ਪੰਜਾਬੀ
                  </a>
                </li>
                <li className="interlanguage-link interwiki-pap">
                  <a
                    href="https://pap.wikipedia.org/wiki/IP_adr%C3%A8s"
                    title="IP adrès – Papiamento"
                    lang="pap"
                    hrefLang="pap"
                    className="interlanguage-link-target"
                  >
                    Papiamentu
                  </a>
                </li>
                <li className="interlanguage-link interwiki-pl">
                  <a
                    href="https://pl.wikipedia.org/wiki/Adres_IP"
                    title="Adres IP – Polish"
                    lang="pl"
                    hrefLang="pl"
                    className="interlanguage-link-target"
                  >
                    Polski
                  </a>
                </li>
                <li className="interlanguage-link interwiki-pt">
                  <a
                    href="https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP"
                    title="Endereço IP – Portuguese"
                    lang="pt"
                    hrefLang="pt"
                    className="interlanguage-link-target"
                  >
                    Português
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ro">
                  <a
                    href="https://ro.wikipedia.org/wiki/Adres%C4%83_IP"
                    title="Adresă IP – Romanian"
                    lang="ro"
                    hrefLang="ro"
                    className="interlanguage-link-target"
                  >
                    Română
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ru">
                  <a
                    href="https://ru.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81"
                    title="IP-адрес – Russian"
                    lang="ru"
                    hrefLang="ru"
                    className="interlanguage-link-target"
                  >
                    Русский
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sah">
                  <a
                    href="https://sah.wikipedia.org/wiki/IP_%D0%B0%D0%B0%D0%B4%D1%8B%D1%80%D1%8B%D1%81"
                    title="IP аадырыс – Sakha"
                    lang="sah"
                    hrefLang="sah"
                    className="interlanguage-link-target"
                  >
                    Саха тыла
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sco">
                  <a
                    href="https://sco.wikipedia.org/wiki/IP_address"
                    title="IP address – Scots"
                    lang="sco"
                    hrefLang="sco"
                    className="interlanguage-link-target"
                  >
                    Scots
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sq">
                  <a
                    href="https://sq.wikipedia.org/wiki/Adresa_IP"
                    title="Adresa IP – Albanian"
                    lang="sq"
                    hrefLang="sq"
                    className="interlanguage-link-target"
                  >
                    Shqip
                  </a>
                </li>
                <li className="interlanguage-link interwiki-scn">
                  <a
                    href="https://scn.wikipedia.org/wiki/Nnirizzu_IP"
                    title="Nnirizzu IP – Sicilian"
                    lang="scn"
                    hrefLang="scn"
                    className="interlanguage-link-target"
                  >
                    Sicilianu
                  </a>
                </li>
                <li className="interlanguage-link interwiki-si">
                  <a
                    href="https://si.wikipedia.org/wiki/%E0%B6%85%E0%B6%BA%E0%B7%92.%E0%B6%B4%E0%B7%93._%E0%B6%BD%E0%B7%92%E0%B6%B4%E0%B7%92%E0%B6%B1%E0%B6%BA"
                    title="අයි.පී. ලිපිනය – Sinhala"
                    lang="si"
                    hrefLang="si"
                    className="interlanguage-link-target"
                  >
                    සිංහල
                  </a>
                </li>
                <li className="interlanguage-link interwiki-simple">
                  <a
                    href="https://simple.wikipedia.org/wiki/IP_address"
                    title="IP address – Simple English"
                    lang="en-simple"
                    hrefLang="en-simple"
                    className="interlanguage-link-target"
                  >
                    Simple English
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sk">
                  <a
                    href="https://sk.wikipedia.org/wiki/Adresa_IP"
                    title="Adresa IP – Slovak"
                    lang="sk"
                    hrefLang="sk"
                    className="interlanguage-link-target"
                  >
                    Slovenčina
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sl">
                  <a
                    href="https://sl.wikipedia.org/wiki/IP-naslov"
                    title="IP-naslov – Slovenian"
                    lang="sl"
                    hrefLang="sl"
                    className="interlanguage-link-target"
                  >
                    Slovenščina
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ckb">
                  <a
                    href="https://ckb.wikipedia.org/wiki/%D9%86%D8%A7%D9%88%D9%86%DB%8C%D8%B4%D8%A7%D9%86%DB%8C_%D8%A6%D8%A7%DB%8C_%D9%BE%DB%8C"
                    title="ناونیشانی ئای پی – Central Kurdish"
                    lang="ckb"
                    hrefLang="ckb"
                    className="interlanguage-link-target"
                  >
                    کوردی
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sr">
                  <a
                    href="https://sr.wikipedia.org/wiki/IP_%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0"
                    title="IP адреса – Serbian"
                    lang="sr"
                    hrefLang="sr"
                    className="interlanguage-link-target"
                  >
                    Српски / srpski
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sh">
                  <a
                    href="https://sh.wikipedia.org/wiki/IP_adresa"
                    title="IP adresa – Serbo-Croatian"
                    lang="sh"
                    hrefLang="sh"
                    className="interlanguage-link-target"
                  >
                    Srpskohrvatski / српскохрватски
                  </a>
                </li>
                <li className="interlanguage-link interwiki-fi">
                  <a
                    href="https://fi.wikipedia.org/wiki/IP-osoite"
                    title="IP-osoite – Finnish"
                    lang="fi"
                    hrefLang="fi"
                    className="interlanguage-link-target"
                  >
                    Suomi
                  </a>
                </li>
                <li className="interlanguage-link interwiki-sv">
                  <a
                    href="https://sv.wikipedia.org/wiki/IP-adress"
                    title="IP-adress – Swedish"
                    lang="sv"
                    hrefLang="sv"
                    className="interlanguage-link-target"
                  >
                    Svenska
                  </a>
                </li>
                <li className="interlanguage-link interwiki-tl">
                  <a
                    href="https://tl.wikipedia.org/wiki/IP_address"
                    title="IP address – Tagalog"
                    lang="tl"
                    hrefLang="tl"
                    className="interlanguage-link-target"
                  >
                    Tagalog
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ta">
                  <a
                    href="https://ta.wikipedia.org/wiki/%E0%AE%87%E0%AE%A3%E0%AF%88%E0%AE%AF_%E0%AE%A8%E0%AF%86%E0%AE%B1%E0%AE%BF%E0%AE%AE%E0%AF%81%E0%AE%B1%E0%AF%88_%E0%AE%AE%E0%AF%81%E0%AE%95%E0%AE%B5%E0%AE%B0%E0%AE%BF"
                    title="இணைய நெறிமுறை முகவரி – Tamil"
                    lang="ta"
                    hrefLang="ta"
                    className="interlanguage-link-target"
                  >
                    தமிழ்
                  </a>
                </li>
                <li className="interlanguage-link interwiki-kab">
                  <a
                    href="https://kab.wikipedia.org/wiki/Tansa_IP"
                    title="Tansa IP – Kabyle"
                    lang="kab"
                    hrefLang="kab"
                    className="interlanguage-link-target"
                  >
                    Taqbaylit
                  </a>
                </li>
                <li className="interlanguage-link interwiki-te">
                  <a
                    href="https://te.wikipedia.org/wiki/%E0%B0%90_%E0%B0%AA%E0%B1%80_%E0%B0%85%E0%B0%A1%E0%B1%8D%E0%B0%B0%E0%B0%B8%E0%B1%81"
                    title="ఐ పీ అడ్రసు – Telugu"
                    lang="te"
                    hrefLang="te"
                    className="interlanguage-link-target"
                  >
                    తెలుగు
                  </a>
                </li>
                <li className="interlanguage-link interwiki-th">
                  <a
                    href="https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B9%84%E0%B8%AD%E0%B8%9E%E0%B8%B5"
                    title="เลขที่อยู่ไอพี – Thai"
                    lang="th"
                    hrefLang="th"
                    className="interlanguage-link-target"
                  >
                    ไทย
                  </a>
                </li>
                <li className="interlanguage-link interwiki-tr">
                  <a
                    href="https://tr.wikipedia.org/wiki/IP_adresi"
                    title="IP adresi – Turkish"
                    lang="tr"
                    hrefLang="tr"
                    className="interlanguage-link-target"
                  >
                    Türkçe
                  </a>
                </li>
                <li className="interlanguage-link interwiki-uk">
                  <a
                    href="https://uk.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0"
                    title="IP-адреса – Ukrainian"
                    lang="uk"
                    hrefLang="uk"
                    className="interlanguage-link-target"
                  >
                    Українська
                  </a>
                </li>
                <li className="interlanguage-link interwiki-ur">
                  <a
                    href="https://ur.wikipedia.org/wiki/%D8%A2%D8%A6%DB%8C_%D9%BE%DB%8C_%D9%BE%D8%AA%DB%81"
                    title="آئی پی پتہ – Urdu"
                    lang="ur"
                    hrefLang="ur"
                    className="interlanguage-link-target"
                  >
                    اردو
                  </a>
                </li>
                <li className="interlanguage-link interwiki-vec">
                  <a
                    href="https://vec.wikipedia.org/wiki/Indariso_IP"
                    title="Indariso IP – Venetian"
                    lang="vec"
                    hrefLang="vec"
                    className="interlanguage-link-target"
                  >
                    Vèneto
                  </a>
                </li>
                <li className="interlanguage-link interwiki-vi">
                  <a
                    href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Ba_ch%E1%BB%89_IP"
                    title="Địa chỉ IP – Vietnamese"
                    lang="vi"
                    hrefLang="vi"
                    className="interlanguage-link-target"
                  >
                    Tiếng Việt
                  </a>
                </li>
                <li className="interlanguage-link interwiki-vls">
                  <a
                    href="https://vls.wikipedia.org/wiki/IP-adres"
                    title="IP-adres – West Flemish"
                    lang="vls"
                    hrefLang="vls"
                    className="interlanguage-link-target"
                  >
                    West-Vlams
                  </a>
                </li>
                <li className="interlanguage-link interwiki-wuu">
                  <a
                    href="https://wuu.wikipedia.org/wiki/IP%E5%9C%B0%E5%9D%80"
                    title="IP地址 – Wu Chinese"
                    lang="wuu"
                    hrefLang="wuu"
                    className="interlanguage-link-target"
                  >
                    吴语
                  </a>
                </li>
                <li className="interlanguage-link interwiki-yi">
                  <a
                    href="https://yi.wikipedia.org/wiki/IP_%D7%90%D7%93%D7%A8%D7%A2%D7%A1"
                    title="IP אדרעס – Yiddish"
                    lang="yi"
                    hrefLang="yi"
                    className="interlanguage-link-target"
                  >
                    ייִדיש
                  </a>
                </li>
                <li className="interlanguage-link interwiki-yo">
                  <a
                    href="https://yo.wikipedia.org/wiki/Oj%C3%BA%E1%BB%8D%CC%80n%C3%A0_IP"
                    title="Ojúọ̀nà IP – Yoruba"
                    lang="yo"
                    hrefLang="yo"
                    className="interlanguage-link-target"
                  >
                    Yorùbá
                  </a>
                </li>
                <li className="interlanguage-link interwiki-zh-yue">
                  <a
                    href="https://zh-yue.wikipedia.org/wiki/IP%E4%BD%8D%E5%9D%80"
                    title="IP位址 – Cantonese"
                    lang="yue"
                    hrefLang="yue"
                    className="interlanguage-link-target"
                  >
                    粵語
                  </a>
                </li>
                <li className="interlanguage-link interwiki-bat-smg">
                  <a
                    href="https://bat-smg.wikipedia.org/wiki/IP_adresos"
                    title="IP adresos – Samogitian"
                    lang="sgs"
                    hrefLang="sgs"
                    className="interlanguage-link-target"
                  >
                    Žemaitėška
                  </a>
                </li>
                <li className="interlanguage-link interwiki-zh">
                  <a
                    href="https://zh.wikipedia.org/wiki/IP%E5%9C%B0%E5%9D%80"
                    title="IP地址 – Chinese"
                    lang="zh"
                    hrefLang="zh"
                    className="interlanguage-link-target"
                  >
                    中文
                  </a>
                </li>{" "}
              </ul>
              <div className="after-portlet after-portlet-lang">
                <span className="wb-langlinks-edit wb-langlinks-link">
                  <a
                    href="https://www.wikidata.org/wiki/Special:EntityPage/Q11135#sitelinks-wikipedia"
                    title="Edit interlanguage links"
                    className="wbc-editpage"
                  >
                    Edit links
                  </a>
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="footer" role="contentinfo">
        <ul id="footer-info">
          <li id="footer-info-lastmod">
            {" "}
            This page was last edited on 7 October 2019, at 21:58
            <span className="anonymous-show">&#160;(UTC)</span>.
          </li>
          <li id="footer-info-copyright">
            Text is available under the{" "}
            <a
              rel="license"
              href="//en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
            >
              Creative Commons Attribution-ShareAlike License
            </a>
            <a
              rel="license"
              href="//creativecommons.org/licenses/by-sa/3.0/"
            ></a>
            ; additional terms may apply. By using this site, you agree to the{" "}
            <a href="//foundation.wikimedia.org/wiki/Terms_of_Use">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="//foundation.wikimedia.org/wiki/Privacy_policy">
              Privacy Policy
            </a>
            . Wikipedia® is a registered trademark of the{" "}
            <a href="//www.wikimediafoundation.org/">
              Wikimedia Foundation, Inc.
            </a>
            , a non-profit organization.
          </li>
        </ul>
        <ul id="footer-places">
          <li id="footer-places-privacy">
            <a
              href="https://foundation.wikimedia.org/wiki/Privacy_policy"
              className="extiw"
              title="wmf:Privacy policy"
            >
              Privacy policy
            </a>
          </li>
          <li id="footer-places-about">
            <a href="/wiki/Wikipedia:About" title="Wikipedia:About">
              About Wikipedia
            </a>
          </li>
          <li id="footer-places-disclaimer">
            <a
              href="/wiki/Wikipedia:General_disclaimer"
              title="Wikipedia:General disclaimer"
            >
              Disclaimers
            </a>
          </li>
          <li id="footer-places-contact">
            <a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">
              Contact Wikipedia
            </a>
          </li>
          <li id="footer-places-developers">
            <a href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute">
              Developers
            </a>
          </li>
          <li id="footer-places-cookiestatement">
            <a href="https://foundation.wikimedia.org/wiki/Cookie_statement">
              Cookie statement
            </a>
          </li>
          <li id="footer-places-mobileview">
            <a
              href="//en.m.wikipedia.org/w/index.php?title=IP_address&amp;mobileaction=toggle_view_mobile"
              className="noprint stopMobileRedirectToggle"
            >
              Mobile view
            </a>
          </li>
        </ul>
        <ul id="footer-icons" className="noprint">
          <li id="footer-copyrightico">
            <a href="https://wikimediafoundation.org/">
              <img
                src="/static/images/wikimedia-button.png"
                srcSet="/static/images/wikimedia-button-1.5x.png 1.5x, /static/images/wikimedia-button-2x.png 2x"
                width="88"
                height="31"
                alt="Wikimedia Foundation"
              />
            </a>{" "}
          </li>
          <li id="footer-poweredbyico">
            <a href="https://www.mediawiki.org/">
              <img
                src="/static/images/poweredby_mediawiki_88x31.png"
                alt="Powered by MediaWiki"
                srcSet="/static/images/poweredby_mediawiki_132x47.png 1.5x, /static/images/poweredby_mediawiki_176x62.png 2x"
                width="88"
                height="31"
              />
            </a>{" "}
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );

export default ipText;
