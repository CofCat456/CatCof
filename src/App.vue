<template>
  <router-view />
</template>

<style lang="scss">
//Bootstrap
@import './assets/all';

// Google Font
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Noto+Sans+TC:wght@400;500;700&family=Open+Sans:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Noto Sans TC', 'Open Sans';
}

body {
  width: 100%;
}

a,
p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
li,
input,
table td,
table th {
  margin: 0;
  padding: 0;
  color: #24395b;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: 2px;
  text-decoration-line: none;
  white-space: pre-line;
}

a:hover {
  color: #24395b;
}

@media screen and (max-width: 768px) {
  a,
  p,
  span,
  li,
  input,
  table tbody > *,
  table th {
    font-size: 0.875rem;
  }

  h6 {
    font-size: 1rem;
  }
}

.font-en {
  font-family: 'Marck Script', cursive;
}

.table > :not(caption) > * > * {
  padding: 0.75rem 0.5rem;
}

thead tr th,
thead tr td {
  font-size: 20px;
  font-weight: 500;
}

tbody td {
  font-weight: 500;
  letter-spacing: 2px;
}

tbody img {
  width: 100%;
  height: auto;
  max-width: 80px;
}

tbody p {
  letter-spacing: 2px;
}

.spButton {
  padding: 1rem 6.5rem;
  font-size: 0.6rem;
  color: #24395b;
  background: transparent;
  text-align: center;
  border: 1px solid #24395b;
  border-radius: 5px;
  transition: all 0.6s;
}

.spButton .bi-chevron-right::before {
  color: #24395b;
  font-size: 0.4rem;
  transition: color 0.6s;
}

.spButton:hover {
  color: #fff;
  background: #24395b;
}

.spButton:hover .bi-chevron-right::before {
  color: #fff;
}

@media screen and (max-width: 768px) {
  .spButton {
    padding: 1rem 14rem;
  }
}
@media screen and (max-width: 414px) {
  .spButton {
    padding: 1rem 8rem;
  }
}

.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.container-fluid,
.container {
  padding-right: 0;
  padding-left: 0;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.breadcrumb > * {
  letter-spacing: 2px;
  font-size: 0.875rem !important;
}

.clrPink {
  color: #ed1e79 !important;
}

.colorBlue {
  color: #24395b !important;
}

.colorOrange {
  color: #ff9800 !important;
}

.bgPink {
  background: #ed1e79 !important;
}

.bgBrown {
  background: #c6a37b !important;
}

.bgBlue {
  background: #dee1e7 !important;
}

.bgcOrange {
  background: #ff9800 !important;
}

.router-link {
  cursor: pointer;
}
</style>

<script>
import emitter from '@/methods/emitter';

export default {
  provide() {
    return {
      emitter
    };
  }
};
</script>
