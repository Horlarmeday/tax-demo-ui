<template>
  <div>
    <!-- begin: Invoice action-->
    <div
            v-if="user.role === 'Officer'"
            class="row justify-content-center py-8 px-8 py-md-10 px-md-0"
    >
      <div class="col-md-9">
        <div class="d-flex justify-content-between">
          <button
                  v-if="tax.officer_approval_status === 'Pending'"
                  type="button"
                  class="btn btn-light-primary font-weight-bold"
                  @click="approveTax"
          >
            Approve
          </button>
          <button
                  v-if="tax.officer_approval_status === 'Pending'"
                  type="button"
                  class="btn btn-danger font-weight-bold"
                  @click="rejectTax"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
    <!-- end: Invoice action-->
    <DIV ref="topclass" id="page_1" class="body" style="margin: auto">
      <DIV id="p1dimg1">
        <IMG src="/media/logos/zamfara.png" id="p1img1" />
      </DIV>
      <DIV class="dclr"></DIV>
      <DIV id="id1_1">
        <P class="p0 ft0">ORIGINAL COPY</P>
      </DIV>
      <DIV id="id1_2">
        <DIV id="id1_2_1">
          <P class="p0 ft1">TCC NO</P>
          <P class="p1 ft1">TAX OFFICE</P>
          <P class="p1 ft1">DATE</P>
        </DIV>
        <DIV id="id1_2_2">
          <P class="p0 ft4"
          ><SPAN class="ft2">:</SPAN><SPAN class="ft3">10615922</SPAN></P
          >
          <P class="p2 ft4"
          ><SPAN class="ft2">:</SPAN
          ><SPAN class="ft3">ZAMFARA</SPAN></P
          >
          <P class="p2 ft4"
          ><SPAN class="ft2">:</SPAN
          ><NOBR><SPAN class="ft3">{{ tax.createdAt | moment("ddd, MMM Do YYYY") }}</SPAN></NOBR></P
          >
        </DIV>
      </DIV>
      <DIV id="id1_3">
        <TABLE cellpadding="0" cellspacing="0" class="t0">
          <TR>
            <TD class="tr0 td0"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr0 td1"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr0 td2"
            ><P class="p4 ft6">TAX CLEARANCE CERTIFICATE</P></TD
            >
          </TR>
          <TR>
            <TD class="tr1 td0"><P class="p3 ft7">Name of Company</P></TD>
            <TD colspan="2" class="tr1 td3"
            ><P class="p5 ft8"
            ><SPAN class="ft7">: </SPAN>{{ tax.User.name.toUpperCase() }}</P
            ></TD
            >
          </TR>
          <TR>
            <TD class="tr2 td0"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr2 td1"><P class="p3 ft5">&nbsp;</P></TD>
            <!--            <TD class="tr2 td2"><P class="p6 ft8">ABUJA</P></TD>-->
          </TR>
          <TR>
            <TD class="tr3 td0"><P class="p3 ft7">RC NO</P></TD>
            <TD class="tr3 td1"><P class="p5 ft7">:</P></TD>
            <TD class="tr3 td2"><P class="p6 ft8">RC1626951</P></TD>
          </TR>
          <TR>
            <TD class="tr4 td0"><P class="p3 ft7">Date of Incorporation</P></TD>
            <TD colspan="2" class="tr4 td3"
            ><P class="p5 ft8"
            ><SPAN class="ft7 mr-5">: </SPAN
            ><NOBR>{{ tax.createdAt | moment("DD/MM/YYYY") }}</NOBR></P
            ></TD
            >
          </TR>
          <TR>
            <TD class="tr4 td0"><P class="p3 ft7">TIN</P></TD>
            <TD class="tr4 td1"><P class="p5 ft7">:</P></TD>
            <TD class="tr4 td2"
            ><P class="p6 ft8">{{ tax.User.tin }}</P></TD
            >
          </TR>
          <TR>
            <TD class="tr4 td0"
            ><P class="p3 ft7">Effective Bussiness Address</P></TD
            >
            <TD colspan="2" class="tr4 td3"
            ><P class="p5 ft8"
            ><SPAN class="ft7 mr-5">: </SPAN>{{ tax.User.address }}</P
            ></TD
            >
          </TR>
          <TR>
            <TD class="tr2 td0"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr2 td1"><P class="p3 ft5">&nbsp;</P></TD>
            <!--            <TD class="tr2 td2"-->
            <!--              ><P class="p6 ft8"-->
            <!--                >ABUJA <NOBR>-&#45;&#45;&#45;&#45;&#45;&#45;</NOBR> Select State <NOBR>-&#45;&#45;&#45;&#45;&#45;&#45;</NOBR></P-->
            <!--              ></TD-->
            <!--            >-->
          </TR>
        </TABLE>
        <P class="p7 ft9"
        >This is to certify that the above named company has rendered Income
          Tax,Value Added Tax,Information Technology Development Levy,Education
          Tax,as well as other tax returns and paid the assessed taxes in
          accordance with the relevant tax laws for all years including the past
          three assessment years as detailed hereunder:-</P
        >
        <table class="table table-bordered mt-8">
          <thead>
          <tr>
            <th scope="col">Assessment Year</th>
            <th scope="col">Income</th>
            <th scope="col">Tax Paid</th>
            <th scope="col">Tax Receipt Number</th>
            <th scope="col">Nature</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="t in tax.Incomes" :key="t.id">
            <th scope="row">{{ t.year }}</th>
            <td>{{ Number(t.income).toLocaleString() }}</td>
            <td>{{ Number(t.amount_tax_paid).toLocaleString() }}</td>
            <td>
              Rev.15
            </td>
            <td>*</td>
          </tr>
          </tbody>
        </table>
        <table>
          <TR>
            <TD colspan="9" class="tr7 td27"
            ><P class="p24 ft12"
            >*Nature of Assessment:(i)Best of Judgement(ii)Self
              Assessment(iii)Minimum
              <NOBR>Tax(iv)Pre-Operation</NOBR> Levy(POL)</P
            ></TD
            >
          </TR>
          <TR>
            <TD class="tr17 td28"><P class="p3 ft17">&nbsp;</P></TD>
            <TD class="tr17 td11"><P class="p3 ft17">&nbsp;</P></TD>
            <TD colspan="5" class="tr17 td29"
            ><P class="p25 ft12"
            >(v)Government(Additional,Audit,Investigation)(vi)Others(Please
              Specify)</P
            ></TD
            >
            <TD class="tr17 td30"><P class="p3 ft17">&nbsp;</P></TD>
            <TD class="tr17 td31"><P class="p3 ft17">&nbsp;</P></TD>
          </TR>
          <TR>
            <TD colspan="2" class="tr1 td32"
            ><P class="p5 ft7">Source of Income</P></TD
            >
            <TD class="tr1 td21"><P class="p26 ft7">:</P></TD>
            <TD colspan="6" class="tr1 td33"
            ><P class="p3 ft8">{{
              tax.source_of_income.toUpperCase()
              }}</P></TD
            >
          </TR>
          <TR>
            <TD colspan="2" class="tr4 td32"
            ><P class="p5 ft7">Other comments</P></TD
            >
            <TD class="tr4 td21"><P class="p26 ft7">:</P></TD>
            <TD colspan="4" class="tr4 td34"
            ><P class="p3 ft8">NEWLY INCORPORATED</P></TD
            >
            <TD class="tr4 td30"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr4 td31"><P class="p3 ft5">&nbsp;</P></TD>
          </TR>
          <TR>
            <TD colspan="2" class="tr4 td32"
            ><P class="p5 ft7">This Certificate Expires On</P></TD
            >
            <TD class="tr4 td21"><P class="p26 ft7">:</P></TD>
            <TD colspan="4" class="tr4 td34"
            ><P class="p3 ft8">{{
              tax.createdAt | moment("add", "1 year")
              }}</P></TD
            >
            <TD class="tr4 td30"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr4 td31"><P class="p3 ft5">&nbsp;</P></TD>
          </TR>
          <TR>
            <TD class="tr4 td28"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr4 td11"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr4 td21"><P class="p3 ft5">&nbsp;</P></TD>
            <TD colspan="6" class="tr4 td33"
            ><P class="p27 ft7"
            >(Not Later than the end of the current year of Assessment)</P
            ></TD
            >
          </TR>
        </table>
        <!--                <TABLE cellpadding="0" cellspacing="0" class="t1">-->
        <!--                  <TR>-->
        <!--                    <TD class="tr1 td4"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD colspan="3" class="tr1 td5"-->
        <!--                      ><P class="p8 ft7">Assessment Year</P></TD-->
        <!--                    >-->
        <!--                    <TD rowspan="2" class="tr5 td6"><P class="p9 ft1">*Nature</P></TD>-->
        <!--                    <TD class="tr1 td7"><P class="p10 ft7">Assessment Year</P></TD>-->
        <!--                    <TD rowspan="2" class="tr5 td8"><P class="p9 ft1">*Nature</P></TD>-->
        <!--                    <TD class="tr1 td9"><P class="p11 ft7">Assessment Year</P></TD>-->
        <!--                    <TD rowspan="2" class="tr5 td8"><P class="p12 ft1">*Nature</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr6 td10"><P class="p3 ft10">&nbsp;</P></TD>-->
        <!--                    <TD class="tr6 td11"><P class="p3 ft10">&nbsp;</P></TD>-->
        <!--                    <TD rowspan="2" class="tr1 td12"><P class="p13 ft7">2017</P></TD>-->
        <!--                    <TD class="tr6 td13"><P class="p3 ft10">&nbsp;</P></TD>-->
        <!--                    <TD rowspan="2" class="tr1 td14"><P class="p14 ft7">2018</P></TD>-->
        <!--                    <TD rowspan="2" class="tr1 td15"><P class="p15 ft7">2019</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr7 td16"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr7 td17"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr7 td18"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr7 td19"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr7 td20"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr7 td20"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr8 td10"><P class="p16 ft7">Turnover</P></TD>-->
        <!--                    <TD class="tr8 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td21"><P class="p17 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td23"><P class="p18 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td25"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr9 td16"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td17"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td12"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td18"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td19"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td14"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td15"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr8 td10"-->
        <!--                      ><P class="p16 ft7">Assessable Profit/Loss</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr8 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td21"><P class="p17 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td23"><P class="p18 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td25"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr9 td16"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td17"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td12"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td18"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td19"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td14"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td15"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr8 td10"><P class="p16 ft7">Total Profit</P></TD>-->
        <!--                    <TD class="tr8 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td21"><P class="p17 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td23"><P class="p18 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td25"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr9 td16"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td17"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td12"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td18"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td19"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td14"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td15"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr8 td10"><P class="p16 ft7">Tax Payable</P></TD>-->
        <!--                    <TD class="tr8 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td21"><P class="p17 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td23"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td25"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr9 td16"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td17"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td12"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td18"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td19"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td14"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td15"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr10 td10"-->
        <!--                      ><P class="p16 ft2">Tax <NOBR>Paid-Companies</NOBR></P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr10 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD rowspan="2" class="tr11 td21"><P class="p19 ft12">NIL</P></TD>-->
        <!--                    <TD class="tr10 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr10 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD rowspan="2" class="tr11 td23"><P class="p14 ft13">NIL</P></TD>-->
        <!--                    <TD class="tr10 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD rowspan="2" class="tr11 td25"><P class="p20 ft13">NIL</P></TD>-->
        <!--                    <TD class="tr10 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD rowspan="2" class="tr12 td10"-->
        <!--                      ><P class="p16 ft2">Income Tax Receipt No</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr13 td11"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td13"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td22"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td24"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td24"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr9 td11"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td21"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td13"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td22"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td23"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td24"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td25"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td24"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr0 td10"><P class="p16 ft2">Date</P></TD>-->
        <!--                    <TD class="tr0 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td21"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td23"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td25"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr13 td16"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td17"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td12"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td18"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td19"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td14"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td20"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td15"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                    <TD class="tr13 td20"><P class="p3 ft14">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr0 td10"-->
        <!--                      ><P class="p16 ft2">Tax Outstanding(If any)</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr0 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td21"><P class="p17 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr0 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td23"><P class="p21 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr0 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr0 td25"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr0 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr9 td16"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td17"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td12"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td18"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td19"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td14"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td15"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                    <TD class="tr9 td20"><P class="p3 ft11">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr14 td10"-->
        <!--                      ><P class="p16 ft2">Petroleum Profit Tax</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr14 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr14 td21"><P class="p19 ft1">N/A</P></TD>-->
        <!--                    <TD class="tr14 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr14 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr14 td23"><P class="p14 ft1">N/A</P></TD>-->
        <!--                    <TD class="tr14 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr14 td25"><P class="p14 ft1">N/A</P></TD>-->
        <!--                    <TD class="tr14 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr12 td10"><P class="p16 ft2">Receipt No. & Date</P></TD>-->
        <!--                    <TD class="tr12 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td21"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td23"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td25"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr12 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr15 td16"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td17"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td12"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td18"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td19"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td14"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td20"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td15"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                    <TD class="tr15 td20"><P class="p3 ft15">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr8 td10"-->
        <!--                      ><P class="p16 ft2">Tax Outstanding(If any)</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr8 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td21"><P class="p22 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td13"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td22"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td23"><P class="p23 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr8 td25"><P class="p14 ft1">NIL</P></TD>-->
        <!--                    <TD class="tr8 td24"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr16 td16"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                    <TD colspan="3" class="tr16 td26"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                    <TD class="tr16 td19"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                    <TD class="tr16 td14"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                    <TD class="tr16 td20"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                    <TD class="tr16 td15"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                    <TD class="tr16 td20"><P class="p3 ft16">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD colspan="9" class="tr7 td27"-->
        <!--                      ><P class="p24 ft12"-->
        <!--                        >*Nature of Assessment:(i)Best of Judgement(ii)Self-->
        <!--                        Assessment(iii)Minimum-->
        <!--                        <NOBR>Tax(iv)Pre-Operation</NOBR> Levy(POL)</P-->
        <!--                      ></TD-->
        <!--                    >-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr17 td28"><P class="p3 ft17">&nbsp;</P></TD>-->
        <!--                    <TD class="tr17 td11"><P class="p3 ft17">&nbsp;</P></TD>-->
        <!--                    <TD colspan="5" class="tr17 td29"-->
        <!--                      ><P class="p25 ft12"-->
        <!--                        >(v)Government(Additional,Audit,Investigation)(vi)Others(Please-->
        <!--                        Specify)</P-->
        <!--                      ></TD-->
        <!--                    >-->
        <!--                    <TD class="tr17 td30"><P class="p3 ft17">&nbsp;</P></TD>-->
        <!--                    <TD class="tr17 td31"><P class="p3 ft17">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD colspan="2" class="tr1 td32"-->
        <!--                      ><P class="p5 ft7">Source of Income</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr1 td21"><P class="p26 ft7">:</P></TD>-->
        <!--                    <TD colspan="6" class="tr1 td33"-->
        <!--                      ><P class="p3 ft8">{{-->
        <!--                        tax.source_of_income.toUpperCase()-->
        <!--                      }}</P></TD-->
        <!--                    >-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD colspan="2" class="tr4 td32"-->
        <!--                      ><P class="p5 ft7">Other comments</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr4 td21"><P class="p26 ft7">:</P></TD>-->
        <!--                    <TD colspan="4" class="tr4 td34"-->
        <!--                      ><P class="p3 ft8">NEWLY INCORPORATED</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr4 td30"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr4 td31"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD colspan="2" class="tr4 td32"-->
        <!--                      ><P class="p5 ft7">This Certificate Expires On</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr4 td21"><P class="p26 ft7">:</P></TD>-->
        <!--                    <TD colspan="4" class="tr4 td34"-->
        <!--                      ><P class="p3 ft8">{{-->
        <!--                        tax.createdAt | moment("add", "1 year")-->
        <!--                      }}</P></TD-->
        <!--                    >-->
        <!--                    <TD class="tr4 td30"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr4 td31"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                  </TR>-->
        <!--                  <TR>-->
        <!--                    <TD class="tr4 td28"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr4 td11"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD class="tr4 td21"><P class="p3 ft5">&nbsp;</P></TD>-->
        <!--                    <TD colspan="6" class="tr4 td33"-->
        <!--                      ><P class="p27 ft7"-->
        <!--                        >(Not Later than the end of the current year of Assessment)</P-->
        <!--                      ></TD-->
        <!--                    >-->
        <!--                  </TR>-->
        <!--                </TABLE>-->
        <TABLE cellpadding="0" cellspacing="0" class="t2">
          <TR>
            <TD class="tr14 td35"></TD>
            <TD class="tr14 td36"
            ><P class="p3 ft5"
            ><img
                    style="position: relative; left: 64px"
                    class="img-barcode"
                    width="50"
                    src="/media/logos/barcode.jpg"
                    alt=""/></P
            ></TD>
            <TD class="tr14 td37"><P class="p3 ft5">&nbsp;</P></TD>
            <TD class="tr14 td38"
            ><P class="p28 ft7">Ali Akilu Muhd Dama Bungudu</P></TD
            >
          </TR>
          <TR>
            <TD class="tr17 td35"></TD>
            <TD class="tr17 td39"><P class="p3 ft17">&nbsp;</P></TD>
            <TD rowspan="2" class="tr10 td37"><P class="p3 ft5">&nbsp;</P></TD>
            <TD rowspan="2" class="tr2 td40"
            ><P class="p29 ft7">Chairman Internal Board of Revenue</P></TD
            >
          </TR>
          <TR>
            <TD class="tr15 td35"></TD>
            <TD rowspan="2" class="tr2 td36"
            ><P class="p30 ft7">Official Stamp Impression</P></TD
            >
          </TR>
          <TR>
            <TD class="tr17 td35"></TD>
            <TD class="tr17 td37"><P class="p3 ft17"></P></TD>
            <TD rowspan="2" class="tr10 td38"
            ><P class="p5 ft7">Name & Rank Of Approving Officer</P></TD
            >
          </TR>
          <TR>
            <TD class="tr13 td35"></TD>
            <TD class="tr13 td36"><P class="p3 ft14">&nbsp;</P></TD>
            <TD class="tr13 td37"><P class="p3 ft14">&nbsp;</P></TD>
          </TR>
        </TABLE>
      </DIV>
    </DIV>
  </div>
</template>

<script>
import axios from "../../../axios";
import { parseJwt } from "../../../helper";

export default {
  name: "Tax",
  data() {
    return {
      tax: "",
      getTaxUrl: "/taxes/",
      approveTaxUrl: "/taxes/approve/",
      rejectTaxUrl: "/taxes/reject/",
      officer_remarks: "",
      user: ""
    };
  },
  methods: {
    notifySuccess(response) {
      this.$notify({
        group: "foo",
        title: "Success message",
        text: response.data.message,
        type: "success"
      });
    },
    notifyError(error) {
      this.$notify({
        group: "foo",
        title: "Error message",
        text: error.response.data,
        type: "error"
      });
    },

    getTax() {
      axios
        .get(this.getTaxUrl + this.$route.params.id)
        .then(response => {
          this.tax = response.data.data;
        })
        .catch(error => {
          this.notifyError(error);
        });
    },

    approveTax() {
      const remarks = window.prompt("Add a remark");
      if (remarks) {
        const data = {
          officer_remarks: remarks
        };
        axios
          .post(this.approveTaxUrl + this.$route.params.id, data)
          .then(response => {
            this.notifySuccess(response);
            this.tax.officer_approval_status =
              response.data.data.officer_approval_status;
          })
          .catch(error => {
            this.notifyError(error);
          });
      }
    },

    rejectTax() {
      const remarks = window.prompt("Add a remark");
      if (remarks) {
        const data = {
          officer_remarks: remarks
        };
        axios
          .post(this.rejectTaxUrl + this.$route.params.id, data)
          .then(response => {
            this.notifySuccess(response);
            this.tax.officer_approval_status =
              response.data.data.officer_approval_status;
          })
          .catch(error => {
            this.notifyError(error);
          });
      }
    }
  },
  created() {
    this.getTax();
    this.user = parseJwt(localStorage.getItem("tax_demo"));
  }
};
</script>

<style scoped>
  .body {
    margin-top: 0px;
    margin-left: 0px;
  }
  #page_1 {
    position: relative;
    overflow: hidden;
    /*margin: 40px 0px 142px 40px;*/
    padding: 0px;
    border: none;
    width: 753px;
    height: 941px;
    background: #effcea;
    border: 3px solid #008000;
  }
  #page_1 #id1_1 {
    border: none;
    margin: 15px 0px 0px 514px;
    padding: 0px;
    border: none;
    width: 239px;
    overflow: hidden;
  }
  #page_1 #id1_2 {
    border: none;
    margin: 27px 0px 0px 444px;
    padding: 0px;
    border: none;
    width: 309px;
    overflow: hidden;
  }
  #page_1 #id1_2 #id1_2_1 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 75px;
    overflow: hidden;
  }
  #page_1 #id1_2 #id1_2_2 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 234px;
    overflow: hidden;
  }
  #page_1 #id1_3 {
    border: none;
    margin: 0px 0px 0px 11px;
    padding: 0px;
    border: none;
    width: 694px;
    overflow: hidden;
  }

  #page_1 #p1dimg1 {
    position: absolute;
    top: -9px;
    left: 250px;
    /*z-index: -1;*/
    width: 713px;
    height: 941px;
  }
  #page_1 #p1dimg1 #p1img1 {
    width: 150px;
  }

  .dclr {
    clear: both;
    float: none;
    height: 1px;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
  }

  .table-bordered th,
  .table-bordered td {
    border: 1px solid black;
  }

  .table thead th {
    border: 1px solid black;
  }

  .ft0 {
    font: 19px "Helvetica";
    color: #ff8000;
    line-height: 22px;
  }
  .ft1 {
    font: 11px "Helvetica";
    line-height: 14px;
  }
  .ft2 {
    font: 12px "Helvetica";
    line-height: 15px;
  }
  .ft3 {
    font: 11px "Helvetica";
    color: #333333;
    margin-left: 6px;
    line-height: 14px;
  }
  .ft4 {
    font: 11px "Helvetica";
    color: #333333;
    line-height: 14px;
  }
  .ft5 {
    font: 1px "Helvetica";
    line-height: 1px;
  }
  .ft6 {
    font: 16px "Helvetica";
    text-decoration: underline;
    color: #999999;
    line-height: 18px;
  }
  .ft7 {
    font: 13px "Helvetica";
    line-height: 16px;
  }
  .ft8 {
    font: 13px "Helvetica";
    color: #333333;
    line-height: 16px;
  }
  .ft9 {
    font: 12px "Helvetica";
    color: #333333;
    line-height: 15px;
  }
  .ft10 {
    font: 1px "Helvetica";
    line-height: 7px;
  }
  .ft11 {
    font: 1px "Helvetica";
    line-height: 9px;
  }
  .ft12 {
    font: 8px "Helvetica";
    line-height: 10px;
  }
  .ft13 {
    font: 9px "Helvetica";
    line-height: 12px;
  }
  .ft14 {
    font: 1px "Helvetica";
    line-height: 6px;
  }
  .ft15 {
    font: 1px "Helvetica";
    line-height: 5px;
  }
  .ft16 {
    font: 1px "Helvetica";
    line-height: 13px;
  }
  .ft17 {
    font: 1px "Helvetica";
    line-height: 12px;
  }

  .p0 {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .p1 {
    text-align: left;
    margin-top: 6px;
    margin-bottom: 0px;
  }
  .p2 {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 0px;
  }
  .p3 {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p4 {
    text-align: left;
    padding-left: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p5 {
    text-align: left;
    padding-left: 16px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p6 {
    text-align: left;
    padding-left: 19px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p7 {
    text-align: left;
    padding-left: 2px;
    padding-right: 22px;
    margin-top: 9px;
    margin-bottom: 0px;
  }
  .p8 {
    text-align: left;
    padding-left: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p9 {
    text-align: left;
    padding-left: 5px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p10 {
    text-align: left;
    padding-left: 21px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p11 {
    text-align: left;
    padding-left: 23px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p12 {
    text-align: left;
    padding-left: 6px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p13 {
    text-align: right;
    padding-right: 36px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p14 {
    text-align: left;
    padding-left: 58px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p15 {
    text-align: left;
    padding-left: 61px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p16 {
    text-align: left;
    padding-left: 2px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p17 {
    text-align: center;
    padding-right: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p18 {
    text-align: left;
    padding-left: 55px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p19 {
    text-align: center;
    padding-right: 17px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p20 {
    text-align: left;
    padding-left: 59px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p21 {
    text-align: left;
    padding-left: 57px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p22 {
    text-align: center;
    padding-right: 22px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p23 {
    text-align: left;
    padding-left: 56px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p24 {
    text-align: center;
    padding-right: 1px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p25 {
    text-align: center;
    padding-left: 1px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p26 {
    text-align: right;
    padding-right: 37px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p27 {
    text-align: left;
    padding-left: 1px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p28 {
    text-align: center;
    padding-left: 22px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p29 {
    text-align: center;
    padding-left: 23px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }
  .p30 {
    text-align: left;
    padding-left: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .td0 {
    padding: 0px;
    margin: 0px;
    width: 184px;
    vertical-align: bottom;
  }
  .td1 {
    padding: 0px;
    margin: 0px;
    width: 20px;
    vertical-align: bottom;
  }
  .td2 {
    padding: 0px;
    margin: 0px;
    width: 420px;
    vertical-align: bottom;
  }
  .td3 {
    padding: 0px;
    margin: 0px;
    width: 440px;
    vertical-align: bottom;
  }
  .td4 {
    border-left: #000000 1px solid;
    border-right: #000000 1px solid;
    border-top: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 142px;
    vertical-align: bottom;
  }
  .td5 {
    border-right: #000000 1px solid;
    border-top: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 135px;
    vertical-align: bottom;
  }
  .td6 {
    border-right: #000000 1px solid;
    border-top: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 45px;
    vertical-align: bottom;
  }
  .td7 {
    border-right: #000000 1px solid;
    border-top: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 134px;
    vertical-align: bottom;
  }
  .td8 {
    border-right: #000000 1px solid;
    border-top: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 47px;
    vertical-align: bottom;
  }
  .td9 {
    border-right: #000000 1px solid;
    border-top: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 136px;
    vertical-align: bottom;
  }
  .td10 {
    border-left: #000000 1px solid;
    border-right: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 142px;
    vertical-align: bottom;
  }
  .td11 {
    padding: 0px;
    margin: 0px;
    width: 39px;
    vertical-align: bottom;
  }
  .td12 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 73px;
    vertical-align: bottom;
  }
  .td13 {
    border-right: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 23px;
    vertical-align: bottom;
  }
  .td14 {
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 134px;
    vertical-align: bottom;
  }
  .td15 {
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 136px;
    vertical-align: bottom;
  }
  .td16 {
    border-left: #000000 1px solid;
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 142px;
    vertical-align: bottom;
  }
  .td17 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 39px;
    vertical-align: bottom;
  }
  .td18 {
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 23px;
    vertical-align: bottom;
  }
  .td19 {
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 45px;
    vertical-align: bottom;
  }
  .td20 {
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 47px;
    vertical-align: bottom;
  }
  .td21 {
    padding: 0px;
    margin: 0px;
    width: 73px;
    vertical-align: bottom;
  }
  .td22 {
    border-right: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 45px;
    vertical-align: bottom;
  }
  .td23 {
    border-right: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 134px;
    vertical-align: bottom;
  }
  .td24 {
    border-right: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 47px;
    vertical-align: bottom;
  }
  .td25 {
    border-right: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 136px;
    vertical-align: bottom;
  }
  .td26 {
    border-right: #000000 1px solid;
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 135px;
    vertical-align: bottom;
  }
  .td27 {
    padding: 0px;
    margin: 0px;
    width: 694px;
    vertical-align: bottom;
  }
  .td28 {
    padding: 0px;
    margin: 0px;
    width: 144px;
    vertical-align: bottom;
  }
  .td29 {
    padding: 0px;
    margin: 0px;
    width: 326px;
    vertical-align: bottom;
  }
  .td30 {
    padding: 0px;
    margin: 0px;
    width: 137px;
    vertical-align: bottom;
  }
  .td31 {
    padding: 0px;
    margin: 0px;
    width: 48px;
    vertical-align: bottom;
  }
  .td32 {
    padding: 0px;
    margin: 0px;
    width: 183px;
    vertical-align: bottom;
  }
  .td33 {
    padding: 0px;
    margin: 0px;
    width: 438px;
    vertical-align: bottom;
  }
  .td34 {
    padding: 0px;
    margin: 0px;
    width: 253px;
    vertical-align: bottom;
  }
  .td35 {
    padding: 0px;
    margin: 0px;
    width: 0px;
    vertical-align: bottom;
  }
  .td36 {
    padding: 0px;
    margin: 0px;
    width: 200px;
    vertical-align: bottom;
  }
  .td37 {
    padding: 0px;
    margin: 0px;
    width: 261px;
    vertical-align: bottom;
  }
  .td38 {
    padding: 0px;
    margin: 0px;
    width: 229px;
    vertical-align: bottom;
  }
  .td39 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 200px;
    vertical-align: bottom;
  }
  .td40 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 229px;
    vertical-align: bottom;
  }

  .tr0 {
    height: 23px;
  }
  .tr1 {
    height: 21px;
  }
  .tr2 {
    height: 17px;
  }
  .tr3 {
    height: 36px;
  }
  .tr4 {
    height: 20px;
  }
  .tr5 {
    height: 28px;
  }
  .tr6 {
    height: 7px;
  }
  .tr7 {
    height: 14px;
  }
  .tr8 {
    height: 26px;
  }
  .tr9 {
    height: 9px;
  }
  .tr10 {
    height: 18px;
  }
  .tr11 {
    height: 24px;
  }
  .tr12 {
    height: 15px;
  }
  .tr13 {
    height: 6px;
  }
  .tr14 {
    height: 19px;
  }
  .tr15 {
    height: 5px;
  }
  .tr16 {
    height: 13px;
  }
  .tr17 {
    height: 12px;
  }

  .t0 {
    width: 624px;
    margin-left: 6px;
    font: 13px "Helvetica";
    color: #333333;
  }
  .t1 {
    width: 694px;
    margin-top: 7px;
    font: 11px "Helvetica";
  }
  .t2 {
    width: 690px;
    margin-top: 53px;
    font: 13px "Helvetica";
  }
</style>
