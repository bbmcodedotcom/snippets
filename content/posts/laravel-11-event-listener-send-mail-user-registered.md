---
title: "Laravel 11 Event & Listener Send Email User Registered"
date: 2024-09-22T23:34:26+07:00
description: Dispatch event when user is registered and send welcome email
tags: [js, PHP, react]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```php
// php artisan make:event UserRegistered
// app/Events/UserRegistered.php
namespace App\Events;

use App\Models\User;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserRegistered
{
    use Dispatchable, SerializesModels;

    public $user;

    /**
     * Create a new event instance.
     *
     * @param \App\Models\User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}

// php artisan make:listener SendWelcomeEmail --event=UserRegistered
// app/Listeners/SendWelcomeEmail.php
namespace App\Listeners;

use App\Events\UserRegistered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeEmail;

class SendWelcomeEmail implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     *
     * @param \App\Events\UserRegistered $event
     */
    public function handle(UserRegistered $event)
    {
        // Send welcome email using the $event->user data
        Mail::to($event->user->email)->send(new WelcomeEmail($event->user));
    }
}

// php artisan make:mail WelcomeEmail
// app/Mail/WelcomeEmail.php
namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    /**
     * Create a new message instance.
     *
     * @param \App\Models\User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.welcome')->with([
            'userName' => $this->user->name,
        ]);
    }
}
// resources/views/emails/welcome.blade.php
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to BBMCode.com!</title>
</head>
<body>
    <h1>Hello, {{ $userName }}</h1>
    <p>Thank you for registering at our platform.</p>
</body>
</html>

// Dispatch event
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Events\UserRegistered;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Validate and create the user
        $user = User::create($request->only('name', 'email', 'password'));

        // Dispatch the event
        event(new UserRegistered($user));

        return redirect()->route('home')->with('success', 'Registration successful.');
    }
}

// register the event and listener
// app/Providers/EventServiceProvider.php
protected $listen = [
    \App\Events\UserRegistered::class => [
        \App\Listeners\SendWelcomeEmail::class,
    ],
];
```
