<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeRepository extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new repository interface and implementation';
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $repositoryPath = app_path("Repositories/Eloquent/{$name}Repository.php");

        $repositoryTemplate = "<?php

        namespace App\Repositories\Eloquent;
        use App\Models\\{$name};
        
       
        class {$name}Repository
        {
            protected \$model;
        
            public function __construct({$name} \$model)
            {
                \$this->model = \$model;
            }
        
          
        }";

             if (!File::exists(dirname($repositoryPath))) {
            File::makeDirectory(dirname($repositoryPath), 0755, true);
        }

        File::put($repositoryPath, $repositoryTemplate);

        $this->info("Repository created successfully.");
    }
}
