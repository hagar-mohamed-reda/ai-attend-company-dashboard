@extends('layouts.vertical', ['title' => 'Form Components'])

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                            <li class="breadcrumb-item active">Elements</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Add User</h4>
                </div>
            </div>
        </div>     
        <!-- end page title --> 




        <!-- Form row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Users</h4>
                      
                        <form>
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name</label>
                                <input type="name" class="form-control" id="name" placeholder="Name">
                            </div>

                            <div class="form-group">
                                <label for="inputEmail4" class="col-form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                            </div>
                          
                            <div class="form-group">
                                <label for="inputAddress" class="col-form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            
                            <div class="form-group">
                                <label for="inputPhone" class="col-form-label">Phone</label>
                                <input type="text" class="form-control" id="inputPhone" placeholder="010">
                            </div>

                            <div class="form-group">
                                <label for="inputPassword4" class="col-form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                            </div>


                            <button type="submit" class="btn btn-success waves-effect waves-light">Sign in</button>

                        </form>

                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->


        
    </div> <!-- container -->
@endsection