@extends('layouts.app')

@section('title')Delete @endsection

@section('content')
<form method="POST" action="{{ route('posts.destroy', ['post' => $post['id']]) }}">
  @csrf
  @method('DELETE')
  <div class="container" style="text-align : center ; margin-top : 20%">
    <div class="mb-3">
      <label class="form-label" style="font-size: 1.4rem; font-weight: bold">Are you sure you want to
        delete
        this post with id : <span style="font-size: 1.4rem; font-weight: bold ; color : red ">{{ $post['id'] }}</span>
        ?</label>
    </div>

    <button type="submit" class="btn btn-danger">Delete</button>


    <a href="{{ route('posts.index') }}" class="btn btn-primary">Cancel</a>

  </div>


</form>
@endsection