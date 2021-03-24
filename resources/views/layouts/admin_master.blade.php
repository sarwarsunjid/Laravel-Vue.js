@include('layouts.admin_header')
@include('layouts.admin_sidebar')

{{-- @yield('content') --}}

{{-- to show vue component --}}
<admin-master></admin-master>

@include('layouts.admin_footer')
