<?php

namespace App\Models;

use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ["category_id", "user_id", "title", "slug", "desc", "img", "status", "views","publish_date"];
    protected $dates = ['created_at'];

    //relasi ke categories

    public function Category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }

    public function User(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
